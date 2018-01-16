export default function PostRoutine(routineData) {
  return dispatch => dispatch({ type: 'POST_ROUTINE', payload: routineData });
}
