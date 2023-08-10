// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  randomNumber = () => {
    const {count, type} = this.state
    const num = Math.ceil(Math.random() * 100)
    if (num % 2 === 0) {
      this.setState(prevState => ({count: num, type: 'Even'}))
    } else {
      this.setState(prevState => ({count: num, type: 'Odd'}))
    }
  }

  render() {
    const {count, type} = this.state
    return (
      <div className="main-container">
        <h1 className="count-head">Count `${count}`</h1>
        <p className="count-type">Count is `${type}`</p>
        <button type="button" onClick={this.randomNumber}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
