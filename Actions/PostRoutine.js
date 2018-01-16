export default function PostRoutine(routineData) {
  return (dispatch) => {
    return dispatch({ type: 'POST_ROUTINE', payload: routineData })
  }
}
