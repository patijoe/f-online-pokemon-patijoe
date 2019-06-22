import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    const {pokeInfo} = this.props;
    const id = this.props.match.params.id;

    const newPoke = pokeInfo.find(item => parseInt(id) === item.id);

    console.log('???', pokeInfo, newPoke);

    return(

      <div className="detail__container">
        {newPoke !== undefined ?
        <div className="detail__card">
          <h2 className="newPoke__name">{newPoke.name}</h2>
          <h2 className="newPoke__height">Height: {newPoke.height} cm</h2>
          <h2 className="newPoke__weight">Weight: {newPoke.weight} gr</h2>
          <ul className="newPoke__hability__List">Abilities: 
              {newPoke.abilities.map((item, index) => {
                return (
                  <li className="ability__item" key={index}> 
                    <h2 className="ability__name">{item.ability.name}</h2>
                  </li>
                );
              })}
          </ul> 
          <div className="newPoke__images">
            <div className="image image1" style={{backgroundImage: `url(${newPoke.sprites.front_default})`}}></div>
            <div className="image image2" style={{backgroundImage: `url(${newPoke.sprites.back_default})`}}></div>
          </div>
        </div> :
        <p>No ha dado timepo a recoger la info que solicitas</p>
        }
        <Link className="return" to="/">RETURN</Link>
      </div>  
    );
  }
}

export default Details;