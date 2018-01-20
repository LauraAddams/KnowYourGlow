const initialState = {
  tagData: ['fragrance', 'mineral oil', 'coconut oil'],
  routineData: ['COSRX Good morning low ph cleanser', 'GLOSSIER Milky jelly cleanser'],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'POST_TAGGED':
      return Object.assign({}, state, {
        tagData: action.payload,
      });
    case 'POST_ROUTINE':
      return Object.assign({}, state, {
        routineData: action.payload,
      });
    default:
      return state;
  }
}
