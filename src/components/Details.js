import React from 'react';

class Details extends React.Component {
  render() {
    const {pokeInfo} = this.props;
    const id = this.props.match.params.id;

    const newPoke = pokeInfo.find(item => parseInt(id) === item.id);

    console.log('???', pokeInfo, newPoke);

    return(

      <div>
        {newPoke !== undefined ?
        <h2>{newPoke.name}</h2> :
        <p>No ha dado timepo arecoger la info que solicitas</p>
        }
      </div>  
    );
  }
}

export default Details;