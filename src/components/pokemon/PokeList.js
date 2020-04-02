import React from "react";
// eslint-disable-next-line
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleClickProps = this.handleClickProps.bind(this)
  }

  handleClickProps(pokemonName) {
    console.log(pokemonName)
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.dataList.map((pokemonObject, index) => (
            <Pokemon 
            key = {index}
            name = {pokemonObject.name} 
            imgUrl = {pokemonObject.img} 
            handleClickProps = {this.handleClickProps}
            />
        ))}
      </ul>
    );
  }
}
export default PokeList;
