import { useState } from "react";
import { api } from "./api.js";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const { token } = await api("/login", {
                method: "POST",
                body: {
                    email,
                    password,
                },
            });

            localStorage.setItem("token", token);

            onLogin();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;