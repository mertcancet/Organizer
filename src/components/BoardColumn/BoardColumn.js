import React from "react";
import Cards from "../Cards/Cards";

class BoardColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNumber: 0 };
  }
  render() {
    return (
      <div>
        <h1>Burası BoardColumn </h1>
        <p>burası navbardan gelen kolon sayısı = {this.props.count}</p>

        <label>Kart Ekle</label>
        <div>
          <button
            onClick={() =>
              this.setState({ cardNumber: this.state.cardNumber + 1 })
            }
          >
            +
          </button>
          <p>{this.state.cardNumber}</p>
        </div>
        <Cards cardNumber={this.state.cardNumber} />
      </div>
    );
  }
}

export default BoardColumn;
