import React from 'react';
import { Link } from 'react-router-dom';

class Pokemons extends React.Component {
  render() {
    const {pokeInfo, filterName} = this.props;

    return(
      <ul className="pokeList">
          {pokeInfo
          .filter(item => item.name.includes(filterName))
          .map(item => {
            return(
              <li className="item" key={item.id} >
                <Link className="item__link" to = {`/pokemon/${item.id}`}>
                <div className="item__img" style={{backgroundImage: `url(${item.sprites.front_default})`}}></div>
                <div className="item__down">
                  <h1 className="item__name">{item.name}</h1>
                  <ul className="item__types__list">
                    {item.types.map((type, index) => {
                      return(
                      <li className="types" key={index}>
                        <h2 className="type">{type.type.name}</h2>
                      </li>
                      );
                    })}
                  </ul>
                  {item.evolution.evolves_from_species !== null ?
                    <h2 className="item__evolution">Evoluciona de: {item.evolution.evolves_from_species.name}</h2> :
                  ''
                }
                </div>
                </Link>
              </li>
            );
          })
          }
        </ul>
    );
  }
}

export default Pokemons;