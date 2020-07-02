import React from "react";
import Cards from "../Cards/Cards";
import "./boardColumn.css";

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
      <div className="boardColumn">
        <h1 className="boardColumn-header">{this.props.list}</h1>

        <ul className="boardColumn-card-ul">
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
        <div className="boardColumn-card">
          <label className="boardColumn-card-label">Kart ekle</label>
          <button className="boardColumn-card-button" onClick={this.addCard}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default BoardColumn;
