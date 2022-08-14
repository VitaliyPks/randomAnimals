const initialState = {
  dog: '',
};

export default function dogReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'NEW_DOG':
      return { ...state, dog: action.payload };
    default:
      return state;
  }
}
