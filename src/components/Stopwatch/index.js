// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {changingOverTime: 0}

  displayTimer = () => {
    const {changingOverTime} = this.state

    const minutes = Math.floor(changingOverTime / 60)
    const seconds = Math.floor(changingOverTime % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  changingTimeOverSeconds = () => {
    this.setState(prevState => ({
      changingOverTime: prevState.changingOverTime + 1,
    }))
  }

  startButtonClicked = () => {
    this.intervalId = setInterval(this.changingTimeOverSeconds, 1000)
  }

  pauseButtonClicked = () => {
    this.clearTimerInterval()
  }

  resetButtonClicked = () => {
    this.clearTimerInterval()
    this.setState({changingOverTime: 0})
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="header">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <p className="timer-name">Timer</p>
          </div>
          <div className="displayTimer-container">
            <h1>{this.displayTimer()}</h1>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="start-button"
              onClick={this.startButtonClicked}
            >
              Start
            </button>
            <button
              type="button"
              className="pause-button"
              onClick={this.pauseButtonClicked}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.resetButtonClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
