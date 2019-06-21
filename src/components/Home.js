import React from 'react';
import Pokemons from './Pokemons';
import FilterName from './FilterName';

class Home extends React.Component{
  render() {
    const {handleFilterName, handleSelect, pokeInfo, filterName} = this.props;

    return(
      <div className="app">
      <FilterName 
        handleFilterName = {handleFilterName} 
      />
      <Pokemons 
        pokeInfo = {pokeInfo}
        filterName = {filterName}
        handleSelect = {handleSelect}
      />
    </div>
    );
  }
}

export default Home;