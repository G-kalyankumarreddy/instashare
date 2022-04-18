import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

import UserPostItem from '../UserPostItem'

const userPostsApiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class UserPosts extends Component {
  state = {
    userPostsList: [],
    apiStatus: userPostsApiConstants.initial,
    likesCount: '',
    postId: '',
  }

  componentDidMount() {
    this.fetchUserPosts()
  }

  updatePostsDataFormat = post => ({
    comments: post.comments.map(each => ({
      comment: each.comment,
      userId: each.user_id,
      userName: each.user_name,
    })),
    createdAt: post.created_at,
    likesCount: post.likes_count,
    postDetails: {
      caption: post.post_details.caption,
      imageUrl: post.post_details.image_url,
    },
    postId: post.post_id,
    profilePic: post.profile_pic,
    userId: post.user_id,
    userName: post.user_name,
    likeStatus: false,
  })

  fetchUserPosts = async () => {
    this.setState({apiStatus: userPostsApiConstants.inProgress})
    const userPostsUrl = 'https://apis.ccbp.in/insta-share/posts'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(userPostsUrl, options)
    if (response.ok) {
      const data = await response.json()

      const updatedPostsDataFormat = data.posts.map(each =>
        this.updatePostsDataFormat(each),
      )
      console.log(updatedPostsDataFormat)
      this.setState({
        apiStatus: userPostsApiConstants.success,
        userPostsList: updatedPostsDataFormat,
      })
    } else {
      this.setState({apiStatus: userPostsApiConstants.failure})
    }
  }

  increaseLikeCount = postId => {
    this.setState({postId})
  }

  decreaseLikeCount = postId => {
    this.setState({postId})
  }

  onSuccessRenderUserPosts = () => {
    const {userPostsList, postId} = this.state
    return (
      <ul className="post-list-container">
        {userPostsList.map(each => (
          <UserPostItem
            key={each.userId}
            postItem={each}
            increaseLikeCount={this.increaseLikeCount}
            decreaseLikeCount={this.decreaseLikeCount}
            isLiked={each.postId === postId}
          />
        ))}
      </ul>
    )
  }

  render() {
    return this.onSuccessRenderUserPosts()
  }
}

export default UserPosts
