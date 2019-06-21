import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import { petition } from './services/Petition';
import { Switch, Route} from 'react-router-dom';

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

  handleSelect(event) {
    const pokeValue = event.currentTarget;
    console.log(pokeValue);
  }

  render() {
    const {pokeInfo, filterName} = this.state;
    return (
      <Switch>
        <Route 
          exact path = '/'
          render = {() => (
            <Home 
              handleFilterName = {this.handleFilterName}
              handleSelect = {this.handleSelect}
              pokeInfo = {pokeInfo}
              filterName = {filterName}
            />
          )}
        />
        <Route
          path = "./pokemon/:id"
          render = { (routerProps => (
            <Details 
              match = {routerProps.match}
            />
          )
          )}
        />
      </Switch>
    );
  }
}

export default App;
