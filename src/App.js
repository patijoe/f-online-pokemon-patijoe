import React from 'react';
// import './App.css';
import Pokemons from './components/Pokemons';
import FilterName from './components/FilterName';
import { petition } from './services/Petition';

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeInfo: [],
      filterName:''
    }

    this.handleFilterName = this.handleFilterName.bind(this);
  }

  componentDidMount() {
    this.fetchPetition();
  }

  fetchPetition() {
    petition(ENDPOINT)
    .then(data => {
      const promises = data.results.map(item => petition(item.url));
      return Promise.all(promises);
    })
    .then(results => {
      console.log('----->>>>', results);
      this.setState({
        pokeInfo: results
      })
    });
  }

  handleFilterName(event) {
    const valueName = event.currentTarget.value;
    console.log('^^', valueName);

    this.setState({
      filterName: valueName
    })
  }

  render() {
    const {pokeInfo, filterName} = this.state;
    return (
      <div className="app">

        {/* <FilterName 
          handleFilterName={this.handleFilterName} 
          filterName={filterName} /> */}
        <Pokemons pokeInfo={pokeInfo}/>
      </div>
    );
  }
}

export default App;
