import { useState } from "react";
import { api } from "./api.js";

function AddProjectForm({ setProjects }) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const { data } = await api("/projects", {
                method: "POST",
                body: {
                    name,
                },
            });

            setProjects((projects) => [
                ...projects,
                data,
            ]);

            setName("");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Add Project</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">
                    Add Project
                </button>
            </form>
        </div>
    );
}

export default AddProjectForm;