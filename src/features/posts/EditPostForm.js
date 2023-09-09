import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((elem) => elem.id === postId)
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
export default EditPostForm
