import React from 'react';
import Pokemons from './Pokemons';
import FilterName from './FilterName';

class Home extends React.Component{
  render() {
    const {handleFilterName, pokeInfo, filterName} = this.props;

    return(
      <div className="app">
      <FilterName 
        handleFilterName = {handleFilterName} 
      />
      <Pokemons 
        pokeInfo = {pokeInfo}
        filterName = {filterName}
      />
    </div>
    );
  }
}

export default Home;