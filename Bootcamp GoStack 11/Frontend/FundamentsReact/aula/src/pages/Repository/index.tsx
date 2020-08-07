import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface IRepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      console.log(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/21963291?s=460&u=f65e8c4c268b77a8b488a50f3166d0c4d2b8e7f6&v=4"
            alt="usuário do github"
          />
          <div>
            <strong>ildaneta/challenges</strong>
            <p>Esse repo é dedicado a desafios realizados!</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="Teste">
          <div>
            <strong>Teste</strong>
            <p>Testando</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
