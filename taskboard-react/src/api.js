const API_URL = "http://localhost:8000/api";

export async function api(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
        },
        body: options.body
            ? JSON.stringify(options.body)
            : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
    }

    return data;
}