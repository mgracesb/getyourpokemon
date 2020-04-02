import React from 'react';
import '../App.css';
import pokemon from '../pokemon';
import PokeList from './pokemon/PokeList';

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handleClickProps(pokemonName) {
    console.log(pokemonName)
  }

  render() {
    console.log(pokemon)
    return (
      <div className="App">
        <PokeList dataList={pokemon}/>
      </div>
    );
  }
}

export default App;

// en Pokelist pasamos una funcion por props  a pokemon que al hacer click nos de el nombre del pokemon en el console.log que esta guardado en el id (lifting)