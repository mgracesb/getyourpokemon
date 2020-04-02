import React from "react";


class Pokemon extends React.Component {
  // eslint-disable-next-line
    constructor(props) {
      super(props);
      this.handleClickLift = this.handleClickLift.bind(this)
    }
    
    handleClickLift(evt) {
      this.props.handleClickProps(evt.currentTarget.id)
    }

    render() {
      return (
          <li className="pokemon" id={this.props.name} onClick={this.handleClickLift}>
            <img src={this.props.imgUrl} alt={this.props.name}></img>
        <span>{this.props.name}</span>
            </li>
        );
    }
}
  export default Pokemon;