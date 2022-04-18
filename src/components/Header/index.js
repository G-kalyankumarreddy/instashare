import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiMenu} from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {displayMenu: false, searchInput: ''}

  // To logout from the account
  onClickLogoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  optionsListAndSearchInputContainer = () => (
    <>
      {this.renderSearchInput()}
      <ul className="header-options-container">
        <Link to="/" className="link-style">
          {' '}
          <li className="options-style">Home</li>
        </Link>
        <Link to="/my-profile" className="link-style">
          {' '}
          <li className="options-style">Profile</li>
        </Link>

        <li className="button-list-item">
          <button
            type="button"
            className="logout-button"
            onClick={this.onClickLogoutButton}
          >
            Logout
          </button>
        </li>
      </ul>
    </>
  )

  onClickMenuIcon = () => {
    this.setState({displayMenu: true})
  }

  onClickCloseIcon = () => {
    this.setState({displayMenu: false})
  }

  smallerDevicesMenuIcon = () => (
    <button
      testid="menuIcon"
      type="button"
      className="menu-button"
      onClick={this.onClickMenuIcon}
    >
      <BiMenu className="menu-icon" />
    </button>
  )

  smallerDevicesMenu = () => (
    <ul className="smaller-devices-header-options-container">
      <Link to="/" className="link-style">
        {' '}
        <li className="options-style">Home</li>
      </Link>
      <Link to="/my-profile" className="link-style">
        {' '}
        <li className="options-style">Profile</li>
      </Link>

      <li className="button-list-item">
        <button
          type="button"
          className="logout-button"
          onClick={this.onClickLogoutButton}
        >
          Logout
        </button>
      </li>
      <li>
        <button
          testid="closeIcon"
          type="button"
          className="close-button"
          onClick={this.onClickCloseIcon}
        >
          <AiFillCloseCircle className="close-icon" />
        </button>
      </li>
    </ul>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <div className="search-input-and-icon-container">
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <button
          className="search-button"
          type="button"
          onClick={this.onClickSearchIcon}
        >
          <FaSearch />
        </button>
      </div>
    )
  }

  onClickSearchIcon = () => {
    this.fetchSearchPosts()
  }

  render() {
    const {displayMenu} = this.state
    return (
      <>
        <nav className="navbar-container">
          <div className="logo-and-title-container">
            <img
              src="https://res.cloudinary.com/kalyankumar/image/upload/v1649413673/instashare/instashareLogo_tykspy.png"
              alt="website logo"
              className="header-instashare-logo"
            />
            <h1 className="header-instashare-title">Insta Share</h1>
          </div>
          {this.optionsListAndSearchInputContainer()}
          {this.smallerDevicesMenuIcon()}
        </nav>
        {displayMenu && this.smallerDevicesMenu()}
      </>
    )
  }
}

export default withRouter(Header)
