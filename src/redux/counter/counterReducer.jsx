// const for action  (separate constants.js)
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Initial State for Store
const initialState = {
  count: 0,
};

// action (separate action.js)
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Không sửa trực tiếp data trong `Store` được mà thông qua `Reducer`
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
    // or throw new Error("Invalid action.")
  }
}

export default counterReducer;
