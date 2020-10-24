const INITIAL_STATE = {
  collections: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_COLLECTIONS':
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
