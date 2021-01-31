import React, { Component } from 'react';
import { GithubAlt } from '@styled-icons/fa-brands/GithubAlt';
import { Plus } from '@styled-icons/fa-solid/Plus';
import { Spinner3 as Spinner } from '@styled-icons/icomoon/Spinner3';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';

import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // loading the localstorage data
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    // if they have repositories in localStorage we'll save it in the state
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // saving the localstorage data
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    // checking if the state of the repository has changed from the current state
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = event => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') {
        throw 'É necessário inserir um repositório';
      }

      const hasRepo = repositories.find(repo => repo.name === newRepo);

      if (hasRepo) {
        throw 'Repositório duplicado';
      }

      // recovering the API data
      const response = await api.get(`/repos/${newRepo}`);

      // recovering the name of repositories
      const data = {
        name: response.data.full_name
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false
      });
    } catch (error) {
      this.setState({ error: true });
      alert(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <h1>
          <GithubAlt size={30} />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            value={newRepo}
            placeholder="Adicionar repositório"
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <Spinner color="#FFF" size={15} />
            ) : (
              <Plus color="#FFF" size={15} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              {/* the encodeURIComponent works so that a bar isn't placed
              but a special character in the URL
              */}
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
