import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionDetail} = this.props
    const {suggestion} = suggestionDetail
    return <li className="suggestion-text list-group-item">{suggestion}</li>
  }
}

export default SuggestionItem
