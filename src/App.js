import React from 'react';
import './App.css';
import {petition} from './services/Petition';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.fetchPetition();
  }

  fetchPetition() {
    petition()
    .then(data => {
      console.log('*', data.results);
        return fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
    })
    .then(pokInfo => pokInfo.json())
    .then(pokData => {
      console.log('**', pokData);
    })
  }

  render() {
    return (
      <div className="app">
        'holi'
      </div>
    );
  }
}

export default App;
