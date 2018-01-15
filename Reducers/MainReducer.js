export default function(state = ['fragrance', 'mineral oil'], action) {
  switch(action.type) {
    case 'FETCH_TAGGED':
      return state;

    default:
      return state;
  }
}
