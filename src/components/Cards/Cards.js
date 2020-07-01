import React from "react";
import CardImg from "./cardsimg.jpg";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.decPriorty = this.decPriorty.bind(this);
    this.incPriorty = this.incPriorty.bind(this);
    this.state = {
      priorty: 0,
    };
  }
  decPriorty() {
    console.log("dec priorty calıstı");
    if (this.state.priorty === 0) alert("önem derecesi 0'ın altına inemez");
    else this.setState({ priorty: this.state.priorty - 1 });
  }
  incPriorty() {
    console.log("inc priorty calıstı");
    this.setState({ priorty: this.state.priorty + 1 });
  }
  render() {
    return (
      <div>
        <div>
          <h3>Cards</h3>
          <input type="text"></input>
          <img src={CardImg} alt="" width="50" height="50"></img>
        </div>

        <label>Önem derecesi</label>
        <br />
        <button onClick={this.decPriorty}>-</button>
        <label>{this.state.priorty}</label>
        <button onClick={this.incPriorty}>+</button>
      </div>
    );
  }
}
export default Cards;
