import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  constructor() {
    super();
    this.state = {
      newTech: '',
      techs: ['NodeJS', 'ReactJS', 'React Native']
    };
  }

  //Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  //Executado sempre que houver alterações nas props ou estado do componente
  componentDidUpdate(_, antigoState) {
    if (antigoState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = event => {
    this.setState({ newTech: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      // utilizando o spread operator
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(tecnologias => tecnologias !== tech)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default TechList;
