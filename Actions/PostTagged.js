export default function PostTagged(tagData) {
  console.log('noooo');
  console.log(tagData);
  return dispatch => {
    return dispatch({ type: 'POST_TAGGED', payload: tagData })
  }
}
