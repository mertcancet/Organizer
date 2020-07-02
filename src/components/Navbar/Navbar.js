import React from "react";
import BoardColumn from "../BoardColumn/BoardColumn";
import "./navbar.css";
import "./reset.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.addColumn = this.addColumn.bind(this);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({ [key]: value });
  }
  addColumn() {
    if (this.state.newItem === "") {
      alert("kolon ismi boş bırakılamaz");
    } else {
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem,
      };

      const list = [...this.state.list];
      list.push(newItem);
      console.log(list);
      this.setState({
        list,
        newItem: "",
      });
    }
  }
  render() {
    return (
      <div className="navbar">
        <h1 className="navbar-header">Kolon ismini giriniz</h1>
        <br />

        <div className="navbar-inside">
          <input
            className="navbar-input"
            type="text"
            placeholder="kolon ismi giriniz"
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          ></input>

          <button className="navbar-button" onClick={this.addColumn}>
            +
          </button>
        </div>
        <ul className="boardColumn-list">
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                <BoardColumn list={item.value} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
