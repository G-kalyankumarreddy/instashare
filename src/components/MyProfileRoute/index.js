import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import ProfileCard from '../ProfileCard'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import './index.css'

const myProfileApiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {
    myProfileDetails: {},
    myStories: [],
    myPosts: [],
    myProfileApiStatus: myProfileApiConstants.initial,
  }

  componentDidMount() {
    this.getMyProfileData()
  }

  myProfileDataFormatUpdation = user => ({
    followersCount: user.followers_count,
    followingCount: user.following_count,
    postsCount: user.posts_count,
    profilePic: user.profile_pic,
    userBio: user.user_bio,
    userId: user.user_id,
    userName: user.user_name,
  })

  getMyProfileData = async () => {
    const token = Cookies.get('jwt_token')
    const myProfileUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(myProfileUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedMyProfileDataFormat = this.myProfileDataFormatUpdation(
        data.profile,
      )

      this.setState({
        myProfileApiStatus: myProfileApiConstants.success,
        myProfileDetails: updatedMyProfileDataFormat,
        myStories: data.profile.stories,
        myPosts: data.profile.posts,
      })
    } else {
      this.setState({myProfileApiStatus: myProfileApiConstants.failure})
    }
  }

  myProfileOnSuccess = () => {
    const {myProfileDetails, myStories, myPosts} = this.state
    return (
      <ProfileCard
        profileDetails={myProfileDetails}
        stories={myStories}
        posts={myPosts}
        profileAlt="my profile"
        postAlt="my post"
        storyAlt="my story"
      />
    )
  }

  onClickTryFetchMyProfile = () => {
    this.getMyProfileDetails()
  }

  myProfileOnFailure = () => (
    <FailureView>
      <button
        type="button"
        className="try-again-button"
        onClick={this.onClickTryFetchMyProfile}
      >
        Try Again
      </button>
    </FailureView>
  )

  renderMyProfilePage = () => {
    const {myProfileApiStatus} = this.state
    switch (myProfileApiStatus) {
      case myProfileApiConstants.inProgress:
        return <LoaderView />
      case myProfileApiConstants.success:
        return this.myProfileOnSuccess()
      case myProfileApiConstants.failure:
        return this.myProfileOnFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderMyProfilePage()}
      </>
    )
  }
}

export default MyProfile
