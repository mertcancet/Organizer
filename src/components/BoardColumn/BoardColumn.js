import React from "react";
import Cards from "../Cards/Cards";

class BoardColumn extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      list: [],
    };
  }

  addCard() {
    const newCard = {
      id: 1 + Math.random(),
    };

    const list = [...this.state.list];
    list.push(newCard);
    this.setState({ list });
    console.log(list);
  }

  render() {
    return (
      <div>
        <h1>BoardColumn</h1>
        <h2>{this.props.list}</h2>

        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                <Cards />
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <label>Kart ekle</label>
        <button onClick={this.addCard}>+</button>
      </div>
    );
  }
}

export default BoardColumn;
