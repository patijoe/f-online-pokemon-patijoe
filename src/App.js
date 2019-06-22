import React from 'react';
import Home from './components/Home';
// import Pokemons from './components/Pokemons';
// import FilterName from './components/FilterName';
import { petition } from './services/Petition';
import { Route, Switch } from 'react-router-dom';

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

  fetchPokemon(url) {
    
  }

  fetchPetition() {
    petition(ENDPOINT)
    .then(data => {
      const promises = data.results.map(item => {
          return petition(item.url).then(element => {
            return petition(element.species.url).then(evolution => {
              const elementComplete = {...element, evolution}
              return elementComplete;
            })
          });
      })
          
      return Promise.all(promises);
      
    })
    .then(result => {
      this.setState({
        pokeInfo: result
      })
      console.log(this.state.pokeInfo);
    })
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
      <Switch>
        <Route 
          exact path='/'
          render = {() => (
            <Home 
              handleFilterName={this.handleFilterName}
              pokeInfo={pokeInfo}
              filterName={filterName}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
