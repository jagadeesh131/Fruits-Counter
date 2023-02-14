import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  increaseMangoCount = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  increaseBananaCount = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruit-image-container">
          <h1 className="heading">
            Bob ate
            <span className="span1"> {mangoCount} </span> mangoes
            <span className="span1"> {bananaCount} </span> bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="fruit-image"
          />
          <button className="eat-button" onClick={this.increaseMangoCount}>
            Eat Mango
          </button>
        </div>
        <div className="fruit-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="fruit-image"
          />
          <button className="eat-button" onClick={this.increaseBananaCount}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
