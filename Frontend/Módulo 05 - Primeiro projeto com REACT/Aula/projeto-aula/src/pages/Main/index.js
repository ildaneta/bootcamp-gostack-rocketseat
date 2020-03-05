import React, { Component } from 'react';
import { GithubAlt } from '@styled-icons/fa-brands/GithubAlt';
import { Plus } from '@styled-icons/fa-solid/Plus';
import { Spinner3 as Spinner } from '@styled-icons/icomoon/Spinner3';
import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { newRepo, repositories } = this.state;

    this.setState({ loading: true });

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
  };

  render() {
    const { newRepo, loading } = this.state;

    return (
      <Container>
        <h1>
          <GithubAlt size={30} />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
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
      </Container>
    );
  }
}
