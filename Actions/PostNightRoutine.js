export default function PostNightRoutine(nightRoutineData) {
  return dispatch => dispatch({ type: 'POST_NIGHT_ROUTINE', payload: nightRoutineData });
}
