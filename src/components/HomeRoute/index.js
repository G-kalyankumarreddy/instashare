import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import UserStories from '../UserStories'
import UserPosts from '../UserPostsRoute'

import './index.css'

const userStoryApiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    userStoriesList: [],
    userStoriesApiStatus: userStoryApiStatus.initial,
  }

  componentDidMount() {
    this.getUserStories()
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  getUserStories = async () => {
    this.setState({userStoriesApistatus: userStoryApiStatus.inProgress})
    const token = Cookies.get('jwt_token')
    const userStoriesUrl = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(userStoriesUrl, options)
    if (response.ok) {
      const data = await response.json()

      const updatedDataFormat = data.users_stories.map(eachStory => ({
        userId: eachStory.user_id,
        userName: eachStory.user_name,
        storyUrl: eachStory.story_url,
      }))
      this.setState({
        userStoriesList: updatedDataFormat,
        userStoriesApistatus: userStoryApiStatus.success,
      })
    } else {
      this.setState({userStoriesApistatus: userStoryApiStatus.failure})
    }
  }

  renderUserStories = () => {
    const {userStoriesApistatus} = this.state
    switch (userStoriesApistatus) {
      case userStoryApiStatus.inProgress:
        return this.renderLoader()

      case userStoryApiStatus.success:
        return this.onSucessUserStories()

      case userStoryApiStatus.failure:
        return this.onFailureUserStories()

      default:
        return null
    }
  }

  onSucessUserStories = () => {
    const {userStoriesList} = this.state
    return <UserStories userStories={userStoriesList} />
  }

  render() {
    const {userStoriesList} = this.state
    console.log(userStoriesList)
    return (
      <>
        <Header />
        <div className="home-page-container">
          {this.renderUserStories()}
          <UserPosts />
        </div>
      </>
    )
  }
}

export default Home
