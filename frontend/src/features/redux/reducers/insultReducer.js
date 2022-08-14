const initialState = {
  insult: '',
};

export default function insultReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'NEW_INSULT':
      return { ...state, insult: action.payload };
    default:
      return state;
  }
}
