import React, { useState, useEffect } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  // Atualiza a tela uma vez com todos os repositórios
  useEffect(async () => {
    const response = await fetch(
      'https://api.github.com/users/ildasilva/repos'
    );

    const data = await response.json();

    setRepositories(data);
  }, []);

  // Vai atualizar apenas quando o repositories possuir alguma alteração de estado
  useEffect(() => {
    const filteredFavorites = repositories.filter(repo => repo.favorite);

    document.title = ` Você possui ${filteredFavorites.length} favoritos!`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(FAVORITO)</span>}
          <button type="button" onClick={() => handleFavorite(repo.id)}>
            Favoritar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
