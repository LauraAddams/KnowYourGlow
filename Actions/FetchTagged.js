export default function FetchTagged() {
  console.log("DISPATCHING FETCH TAGGED");
  return dispatch => {
    return dispatch({ type: 'FETCH_TAGGED' })
  }
}
