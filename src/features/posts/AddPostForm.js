import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector((state) => state.users)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
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
        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
export default AddPostForm
