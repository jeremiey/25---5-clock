import React from "react";
import "../App.scss";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      };
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      };
    });
  }

  render() {
    return (
      <main>
        <h2>25 + 5 Clock</h2>
        <section className="interval-length-container">
          <BreakLength
            breakLength={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength sessionLength={this.state.sessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;
