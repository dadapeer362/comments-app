import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const imgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'
let colorCount = -1

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  onClickDeleteComment = id => {
    const {commentsList, count} = this.state
    const filteredData = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    const changeCount = count - 1
    this.setState({commentsList: filteredData, count: changeCount})
  }

  onChangeName = event => {
    const {name} = this.state
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    const {comment} = this.state
    this.setState({comment: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {commentsList, name, comment, count} = this.state
    if (name !== '' && comment !== '') {
      if (colorCount >= initialContainerBackgroundClassNames.length - 1) {
        colorCount = 0
      } else {
        colorCount = colorCount + 1
      }
      const newCommentList = {
        id: uuidv4(),
        name,
        comment,
        color: initialContainerBackgroundClassNames[colorCount],
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newCommentList],
        name: '',
        comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <div>
        <div className="bg-container">
          <div className="container-form">
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <input
                className="name-input"
                type="text"
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
              />
              <br />
              <textarea
                className="comment-input"
                type="text"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <br />
              <button className="button-style" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img className="img-style" src={imgUrl} alt="comments" />
        </div>
        <hr className="hr-line" />
        <div className="comment-count-container">
          <div className="comments-count">
            <p>{count}</p>
          </div>
          <span className="comment-span">Comments</span>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              deleteFunction={this.onClickDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
