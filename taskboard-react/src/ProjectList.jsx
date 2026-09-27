import { useEffect } from "react";
import { api } from "./api.js";

function ProjectList({ projects, setProjects }) {

    useEffect(() => {
        const getProjects = async () => {
            try {
                const { data } = await api("/projects");

                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProjects();
    }, [setProjects]);

    return (
        <div>
            <h2>Projects</h2>

            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                projects.map((project) => (
                    <div key={project.id}>
                        <h3>{project.name}</h3>
                        <p>Tasks: {project.tasks_count}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default ProjectList;