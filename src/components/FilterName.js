import React from 'react';

class FilterName extends React.Component {
  render() {
    const {handleFilterName} = this.props;
    return(
      <div className="filter-name">
        <label htmlFor="filterName" className="filter__label">Filtra por nombre</label>
        <input type="text" id="filterName" onChange={handleFilterName}/>
      </div>
    );
  }
}

export default FilterName;