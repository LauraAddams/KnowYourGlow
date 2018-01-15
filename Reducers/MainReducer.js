export default function(state = ['fragrance', 'edta fragrance', 'water', 'mineral oil'], action) {
  switch(action.type) {
    case 'FETCH_TAGGED':
      return state;

    default:
      return state;
  }
}
