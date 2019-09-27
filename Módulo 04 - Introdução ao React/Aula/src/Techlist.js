import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  handleInputChange = event => {
    this.setState({ newTech: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        techs: [...this.state.techs, this.state.newTech],
        newTech: ''
      });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(tec => tec !== tech) })
  }

  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  componentDidUpdate(_, stateAntigo) {
    if (stateAntigo.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
};

export default TechList;

