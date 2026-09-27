import { api } from "./api.js";

function LogoutButton({ onLogout }) {

    const handleLogout = async () => {
        try {
            await api("/logout", {
                method: "POST",
            });
        } catch (error) {
            console.error(error);
        }

        localStorage.removeItem("token");

        onLogout();
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;