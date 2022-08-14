const initialState = {
  cat: '',
};

export default function catReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'NEW_CAT':
      return { ...state, cat: action.payload };
    default:
      return state;
  }
}
