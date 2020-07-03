import React from "react";
import CardImg1 from "./img/1.png";
import CardImg2 from "./img/2.png";
import CardImg3 from "./img/3.png";
import CardImg4 from "./img/4.png";
import CardImg5 from "./img/5.png";
import "./cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.decPriorty = this.decPriorty.bind(this);
    this.incPriorty = this.incPriorty.bind(this);

    this.state = {
      image: CardImg3,
      priorty: 3,
    };
  }
  decPriorty() {
    console.log("dec priorty calıstı");
    if (this.state.priorty === 0) alert("önem derecesi 0'ın altına inemez");
    else this.setState({ priorty: this.state.priorty - 1 });

    if (this.state.priorty === 1) this.setState({ image: CardImg1 });
    else if (this.state.priorty === 2) this.setState({ image: CardImg2 });
    else if (this.state.priorty === 3) this.setState({ image: CardImg3 });
    else if (this.state.priorty === 4) this.setState({ image: CardImg4 });
    else if (this.state.priorty === 5) this.setState({ image: CardImg5 });
  }
  incPriorty() {
    console.log("inc priorty calıstı");

    if (this.state.priorty === 5) alert("önem derecesi 5'ın üstüne çıkamaz");
    else this.setState({ priorty: this.state.priorty + 1 });

    if (this.state.priorty === 1) this.setState({ image: CardImg1 });
    else if (this.state.priorty === 2) this.setState({ image: CardImg2 });
    else if (this.state.priorty === 3) this.setState({ image: CardImg3 });
    else if (this.state.priorty === 4) this.setState({ image: CardImg4 });
    else if (this.state.priorty === 5) this.setState({ image: CardImg5 });
  }

  render() {
    return (
      <div className="cards">
        <div>
          <h3>Cards</h3>
          <textarea></textarea>
          <img src={this.state.image} alt="" width="60" height="60"></img>
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
