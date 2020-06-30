import React from "react";
import BoardColumn from "../BoardColumn/BoardColumn";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1> Burası Navbar!!!</h1>
        <label>Kolon sayısı giriniz</label>

        <div>{this.state.count}</div>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count Up
        </button>
        <button
          onClick={() => {
            if (this.state.count === 0) {
              this.setState({ count: 0 });
              console.log("0 oldu ");
              alert("kolon sayısı 0'ın altına inemez");
            } else {
              this.setState({ count: this.state.count - 1 });
            }
          }}
        >
          Count Down
        </button>
        <BoardColumn count={this.state.count} />
      </div>
    );
  }
}

export default Navbar;
