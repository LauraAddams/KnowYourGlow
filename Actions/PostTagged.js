export default function PostTagged(tagData) {
  return dispatch => dispatch({ type: 'POST_TAGGED', payload: tagData });
}
