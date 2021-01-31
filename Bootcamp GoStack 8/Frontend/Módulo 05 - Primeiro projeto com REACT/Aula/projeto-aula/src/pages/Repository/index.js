import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@styled-icons/fa-solid/ArrowLeft';
import Container from '../../components/Container';

import { Loading, Owner, IssueList, IssueFilter, PageAction } from './styles';

import api from '../../services/api';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string
      })
    }).isRequired
  };

  constructor() {
    super();

    this.state = {
      repository: {},
      issues: [],
      loading: true,
      filters: [
        {
          state: 'all',
          label: 'Todas',
          active: true
        },
        {
          state: 'open',
          label: 'Abertas',
          active: false
        },
        {
          state: 'closed',
          label: 'Fechadas',
          active: false
        }
      ],
      filterIndex: 0,
      page: 1
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;

    // the decodeURIComponent is removing special characters from the URL name
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find(filter => filter.active).state,
          per_page: 10
        }
      })
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 10,
        page
      }
    });

    this.setState({ issues: response.data });
  };

  handleFilterClick = async filterIndex => {
    await this.setState({ filterIndex });
    this.loadIssues();
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1
    });
    this.loadIssues();
  };

  render() {
    const {
      issues,
      repository,
      loading,
      filters,
      filterIndex,
      page
    } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <div>
            <ArrowLeft size={14} color="#d66262" />
            <Link to="/">Voltar aos repositórios</Link>
          </div>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.full_name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <IssueFilter active={filterIndex}>
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter.label}
                onClick={() => this.handleFilterClick(index)}
              >
                {filter.label}
              </button>
            ))}
          </IssueFilter>

          {issues.map(issue => (
            <ul key={String(issue.id)}>
              <li>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url} target="_blank">
                      {issue.title}
                    </a>
                    {issue.labels.map(label => (
                      <span key={label.id}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            </ul>
          ))}
        </IssueList>

        <PageAction>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Anterior
          </button>
          <button type="button" onClick={() => this.handlePage('next')}>
            Próximo
          </button>
        </PageAction>
      </Container>
    );
  }
}
