import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    date: '2023-09-11T12:44:18.564Z',
    title: 'First Post!',
    content: 'Hello!',
    user: '2',
    reactions: { thumbsUp: 1, hooray: 0, heart: 0, rocket: 1, eyes: 0 },
  },
  {
    id: '2',
    date: '2023-09-11T12:44:18.564Z',
    title: 'Second Post',
    content: 'More text',
    user: '1',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id } = action.payload
      const index = state.findIndex((elem) => elem.id === id)
      state[index] = action.payload
    },
    reactionAdded(state, action) {
      const { id, reaction } = action.payload
      const existingPost = state.find((elem) => elem.id === id)
      existingPost && existingPost.reactions[reaction]++
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
