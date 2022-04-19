import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import UserStories from '../UserStories'
import UserPosts from '../UserPostsRoute'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-page-container">
          <UserStories />
          <UserPosts />
        </div>
      </>
    )
  }
}

export default Home
