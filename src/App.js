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
    this.handleResetFilter = this.handleResetFilter.bind(this);
  }

  componentDidMount() {
    this.fetchPetition();
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

    this.setState({
      filterName: valueName
    })
  }

  handleResetFilter() {
    this.setState({
      filterName: ''
    })
  }

  render() {
    const {pokeInfo, filterName} = this.state;
    return (
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <Home 
              handleFilterName={this.handleFilterName}
              pokeInfo={pokeInfo}
              filterName={filterName}
            />
          )}
        />
        <Route
          path="/pokemon/:id"
          render={(routerProps) => (
            <Details 
              match={routerProps.match}
              pokeInfo={pokeInfo}
              handleResetFilter={this.handleResetFilter}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
