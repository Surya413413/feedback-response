// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: true,
  }

  setIsFeedbackSelected = () => {
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(each => (
            <li
              key={each.id}
              className="list-item-container"
              onClick={this.setIsFeedbackSelected}
            >
              <img src={each.imageUrl} alt={each.name} className="emoji" />
              <p className="emoji-title">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    return (
      <div className="thankyou-container">
        <img src={resources.loveEmojiUrl} className="emoji" alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
