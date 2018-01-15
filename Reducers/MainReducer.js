export default function(state = ['fragrance', 'jojoba oil', 'water', 'mineral oil'], action) {
  switch(action.type) {
    case 'FETCH_TAGGED':
      return state;
    
    default:
      return state;
  }
}
