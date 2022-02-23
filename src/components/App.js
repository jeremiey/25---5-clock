import React from 'react'
import '../App.scss'
import BreakLength from './BreakLength'
import SessionLength from './SessionLength'
import Timer from './Timer'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="interval-length-container">
          <BreakLength  breakLength={this.state.breakLength} />
          <SessionLength sessionLength={this.state.sessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    )
  }
}

export default App
