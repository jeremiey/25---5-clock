import React from 'react'
import '../App.scss'
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <BreakInterval  breakInterval={this.state.breakLength} />
        <SessionLength sessionLength={this.state.sessionLength} />
      </main>
    )
  }
}

export default App
