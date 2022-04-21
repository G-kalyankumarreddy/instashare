import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'

import UserPostItem from '../UserPostItem'
import './index.css'

const searchPostsApiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SearchPosts extends Component {
  onSuccessUserPosts = () => {
    const {searchPostsList, increaseLikeCount, decreaseLikeCount} = this.props

    return (
      <div className="search-posts-page-container">
        <h1>Search Results</h1>
        <ul className="post-list-container">
          {searchPostsList.map(each => (
            <UserPostItem
              key={each.postId}
              postItem={each}
              increaseLikeCount={increaseLikeCount}
              decreaseLikeCount={decreaseLikeCount}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.onSuccessUserPosts()}</>
  }
}

export default SearchPosts
