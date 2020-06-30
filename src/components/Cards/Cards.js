import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <h1>Burası Cards</h1>
        <p>{this.props.cardNumber}</p>
      </div>
    );
  }
}
export default Cards;
