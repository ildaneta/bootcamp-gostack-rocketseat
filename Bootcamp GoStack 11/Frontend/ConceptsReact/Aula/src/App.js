import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: 'Novo projeto',
      owner: 'Ilda Neta',
    });

    const newProject = response.data;

    setProjects([...projects, newProject]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((proj, index) => (
          <li key={proj.id}>
            {proj.title} - {proj.owner}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
