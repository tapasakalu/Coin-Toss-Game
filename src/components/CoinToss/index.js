// Write your code here
import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headImage,
    headCount: 0,
    tailsCount: 0,
  }

  onClickToss = () => {
    const {headCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHead = headCount
    let latestTails = tailsCount

    if (toss === 0) {
      tossImg = headImage
      latestHead += 1
    } else {
      tossImg = tailsImage
      latestTails += 1
    }

    this.setState({
      tossImage: tossImg,
      headCount: latestHead,
      tailsCount: latestTails,
    })
  }

  render() {
    const {tossImage, headCount, tailsCount} = this.state
    const totalCount = headCount + tailsCount

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
