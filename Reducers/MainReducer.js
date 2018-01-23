const initialState = {
  tagData: ['fragrance', 'mineral oil', 'betaine'],
  routineData: ['COSRX low ph good morning gel cleanser', 'CERAVE moisturizing cream', 'GLOSSIER invisible shield'],
  nightRoutineData: ['SENSIBIO h20 micellar water', 'COSRX aha 7 whitehead power liquid', 'ETUDE HOUSE darling cream', 'GENERIC jojoba oil'],
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
    case 'POST_NIGHT_ROUTINE':
      return Object.assign({}, state, {
        nightRoutineData: action.payload,
      });
    default:
      return state;
  }
}
