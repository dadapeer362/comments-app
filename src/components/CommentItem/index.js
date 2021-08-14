import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import './index.css'

const unLikedImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
const deleteImg =
  'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

class CommentItem extends Component {
  state = {liked: false}

  onChangeLike = () => {
    const {liked} = this.state
    this.setState(prevState => ({liked: !prevState.liked}))
  }

  onDeleteComment = () => {
    const {commentDetails, deleteFunction} = this.props
    const {id} = commentDetails
    deleteFunction(id)
  }

  render() {
    const {commentDetails} = this.props
    const {id, name, comment, color} = commentDetails
    const {liked} = this.state
    const image = liked ? likedImg : unLikedImg
    const imgText = liked ? 'img-liked-blue' : 'img-text'
    return (
      <li className="list-item">
        <div className="comment-list-item-container">
          <div className={`${color} profile-name-container`}>
            <p className="profile-name-letter-para">{name[0]}</p>
          </div>
          <div className="profile-name-container-2">
            <p className="profile-name">{name}</p>
          </div>
          <div className="timer-container">
            <p className="timer-para">{formatDistanceToNow(new Date())}</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
        <div className="like-delete-container">
          <button type="button" className="button" onClick={this.onChangeLike}>
            <img className="like-img" src={image} alt="like" />
            <span className={imgText}>Like</span>
          </button>
          <button
            type="button"
            className="button"
            testid="delete"
            onClick={this.onDeleteComment}
          >
            <img className="delete" src={deleteImg} alt="delete" />
          </button>
        </div>
        <hr className="hr-line-2" />
      </li>
    )
  }
}

export default CommentItem
