import React from 'react';

class Pokemons extends React.Component {
  render() {
    const {pokeInfo} = this.props;

    return(
      <ul className="pokeList">
          {pokeInfo.map(item => {
            return(
              <li className="item" key={item.id}>
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
                </div>
              </li>
            );
          })}
        </ul>
    );
  }
}

export default Pokemons;