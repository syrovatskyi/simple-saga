/*import {ADD_NUMBER, REMOVE_NUMBER} from "./actions";*/

const initialState = {
  count: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export const  incrementCreator = () => ({type: INCREMENT});
export const  decrementCreator = () => ({type: DECREMENT});

export const  asyncIncrementCreator = () => ({type: ASYNC_INCREMENT});
export const  asyncDecrementCreator = () => ({type: ASYNC_DECREMENT});


