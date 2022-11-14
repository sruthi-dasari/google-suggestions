import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-bar-dropdown">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Google"
          />
          <ul className="list-group">
            {suggestionsList.map(eachObj => (
              <SuggestionItem suggestionDetail={eachObj} key={eachObj.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
