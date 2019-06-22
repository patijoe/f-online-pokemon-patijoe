import React from 'react';

class Details extends React.Component {
  render() {

    console.log('---------->');

    const {pokeInfo} = this.props;
    const id = this.props.match.params.id;

    const newPoke = pokeInfo.find(item => id===item.id);

    return(
  
      <h2>venga</h2>
    
    );
  }
}

export default Details;