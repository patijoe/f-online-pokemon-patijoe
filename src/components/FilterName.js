import React from 'react';

class FilterName extends React.Component {
  render() {
    const {pokeInfo, filterName, handleFilterName} = this.props;
    return(
      <div className="filter-name">
        <label htmlFor="filterName">Filtra por nombre</label>
        <input type="text" id="filerName" onChange={handleFilterName}/>

        {pokeInfo.filter(item => item.name.includes(filterName))};
      </div>
    );
  }
}

export default FilterName;