import React from 'react';
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
