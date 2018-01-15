export default function(state = { tagData: ['fragrance', 'mineral oil'] }, action) {
  switch(action.type) {
    case 'POST_TAGGED':
      return Object.assign({}, state, {
        tagData: action.payload,
      });
    default:
      return state;
  }
}
