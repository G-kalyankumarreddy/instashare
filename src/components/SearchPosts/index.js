import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import './index.css'

const searchPostsApiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SearchPosts extends Component {
  state = {
    searchPostsList: [],
    searchPostsStatus: searchPostsApiConstants.initial,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <div className="search-input-and-icon-container">
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <button className="search-button" type="button">
          <FaSearch />
        </button>
      </div>
    )
  }
}
