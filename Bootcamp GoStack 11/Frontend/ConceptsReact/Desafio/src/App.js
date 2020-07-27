import React, { useState, useEffect } from 'react';
import api from './services/api';
import rockeseatLogo from './rocketseat.png';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [newRepo, setNewRepo] = useState([]);

  useEffect(() => {
    api
      .get('/repositories')
      .then((response) => setRepositories(response.data))
      .catch((err) => console.log(err));
  }, []);

  async function handleAddRepository(newRepo) {
    const response = await api.post('/repositories', {
      title: `/repo/ildaneta/${newRepo} `,
      owner: 'Ilda Neta',
    });

    const newRepository = response.data;

    setRepositories([...repositories, newRepository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);

    setRepositories(repositories.filter((repository) => repository.id !== id));
  }

  function handleInputChange(event) {
    const { value } = event.target;

    setNewRepo([value]);
  }

  return (
    <>
      <div className="header">
        <img
          src={rockeseatLogo}
          className="img"
          width={180}
          alt="Logo da rocketseat"
        />
      </div>
      <form onSubmit={() => handleAddRepository(newRepo)}>
        <div>
          <input
            type="text"
            onChange={handleInputChange}
            value={newRepo}
            placeholder="Adicione um repositório"
          />
          <button>Adicionar</button>
        </div>
      </form>
      <div>
        <ul data-testid="repository-list">
          {repositories.map((repo) => (
            <div className="repo" key={repo.id}>
              <li>
                <div className="repositories">
                  <div className="title-repo">{repo.title}</div>

                  <div className="button">
                    <button onClick={() => handleRemoveRepository(repo.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
