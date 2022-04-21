import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiMenu} from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {
    displayMenu: false,
  }

  onClickSearchButton = () => {
    const {onClickingSearchButton} = this.props
    onClickingSearchButton()
  }

  // To logout from the account
  onClickLogoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  optionsListAndSearchInputContainer = () => (
    <div className="search-input-and-options-list-container">
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
    </div>
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

  onClickSearchButtonSmallDevics = () => {
    this.setState(prevState => ({displayMenu: !prevState.displayMenu}))
  }

  smallerDevicesMenu = () => (
    <ul className="smaller-devices-header-options-container">
      <Link to="/" className="link-style">
        {' '}
        <li className="options-style">Home</li>
      </Link>
      <li>
        <button
          type="button"
          className="search-btn-smaller-devices"
          onClick={this.onClickSearchButtonSmallDevics}
        >
          Search
        </button>
      </li>
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
    const {onChangingSearchInput} = this.props
    onChangingSearchInput(event)
  }

  renderSearchInput = () => {
    const {searchInput} = this.props
    return (
      <div className="search-input-and-icon-container no-display-small-screens">
        <input
          type="search"
          className="search-input"
          value={searchInput}
          placeholder="Search Caption"
          onChange={this.onChangeSearchInput}
        />

        <button
          className="search-button"
          type="button"
          onClick={this.onClickSearchButton}
          testid="searchIcon"
        >
          <FaSearch />
        </button>
      </div>
    )
  }

  renderSearchInputSmallScreens = () => {
    const {searchInput} = this.props
    return (
      <div className="search-input-and-icon-container-small-screens">
        <input
          type="search"
          className="search-input"
          value={searchInput}
          placeholder="Search Caption"
          onChange={this.onChangeSearchInput}
        />

        <button
          className="search-button"
          type="button"
          onClick={this.onClickSearchButton}
          testid="searchIcon"
        >
          <FaSearch />
        </button>
      </div>
    )
  }

  render() {
    const {displayMenu} = this.state
    return (
      <>
        <nav className="navbar-container">
          <Link to="/" className="link-style">
            <div className="logo-and-title-container">
              <img
                src="https://res.cloudinary.com/kalyankumar/image/upload/v1649413673/instashare/instashareLogo_tykspy.png"
                alt="website logo"
                className="header-instashare-logo"
              />
              <h1 className="header-instashare-title">Insta Share</h1>
            </div>
          </Link>
          {this.optionsListAndSearchInputContainer()}
          {this.smallerDevicesMenuIcon()}
        </nav>
        {displayMenu
          ? this.smallerDevicesMenu()
          : this.renderSearchInputSmallScreens()}
      </>
    )
  }
}

export default withRouter(Header)
