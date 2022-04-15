import {Link} from 'react-router-dom'
import './index.css'

const UserPostItem = props => {
  const {postItem} = props
  const {
    comments,
    createdAt,
    likesCount,
    postDetails,
    postId,
    profilePic,
    userId,
    userName,
  } = postItem
  const {caption, imageUrl} = postDetails
  return (
    <li testid="postItem" className="post-item-container">
      <div className="profile-pic-and-name-container">
        <div className="profile-image-container">
          <img
            src={profilePic}
            alt="post author profile"
            className="profile-logo-image"
          />
        </div>
        <Link to={`/users/${userId}`} className="profile-link">
          {' '}
          <h1 className="post-username-styling">{userName}</h1>
        </Link>
      </div>
      <img src={imageUrl} alt="post" className="post-image-style" />
      <div className="likes-icons-caption-and-comments-container">
        <p className="caption-style">{caption}</p>
        <ul className="comments-containers">
          {comments.map(each => (
            <li className="comment-item" key={each.userId}>
              <p className="username-in-comment">
                {each.userName}
                <span className="comment-styling">{each.comment}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="created-at-styling">{createdAt}</p>
      </div>
    </li>
  )
}

export default UserPostItem
