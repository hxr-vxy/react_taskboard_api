import { useState } from "react";

import LoginForm from "./LogInForm.jsx";
import ProjectList from "./ProjectList.jsx";
import AddProjectForm from "./AddProjectForm.jsx";
import LogoutButton from "./LogoutButton.jsx";

function App() {
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [projects, setProjects] = useState([]);

    const handleLogin = () => {
        setToken(localStorage.getItem("token"));
    };

    const handleLogout = () => {
        setToken(null);
        setProjects([]);
    };

    if (!token) {
        return <LoginForm onLogin={handleLogin} />;
    }

    return (
        <div>
            <h1>Project Manager</h1>

            <LogoutButton onLogout={handleLogout} />

            <AddProjectForm setProjects={setProjects} />

            <ProjectList
                projects={projects}
                setProjects={setProjects}
            />
        </div>
    );
}

export default App;