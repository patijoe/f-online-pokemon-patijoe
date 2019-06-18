import React from 'react';

class Pokemons extends React.Component {
  render() {
    const {pokeInfo} = this.props;

    console.log('*^', pokeInfo)
    return(
      <ul className="pokelist">
        {pokeInfo.map(item => {
            return(
              <li className="pok_item" key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
    );
  }
}

export default Pokemons;