const initialState = {
  fox: '',
};

export default function foxReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'NEW_FOX':
      return { ...state, fox: action.payload };
    default:
      return state;
  }
}
