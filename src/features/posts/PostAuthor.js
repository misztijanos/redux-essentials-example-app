import { useSelector } from 'react-redux'
const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((elem) => elem.id === userId)
  )
  return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor
