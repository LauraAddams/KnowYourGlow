export default function PostTagged(tagData) {
  return (dispatch) => {
    return dispatch({ type: 'POST_TAGGED', payload: tagData })
  }
}
