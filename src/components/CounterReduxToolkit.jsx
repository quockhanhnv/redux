import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux-toolkit/counter/counterSlice";

const CounterReduxToolkit = () => {
  /* 
    export const counterSlice = createSlice({
      name: "counter",
      initialState: {
        count: 0,
      },
      reducers: {
        increment: (state) => ({ ...state, count: state.count + 1 }),
        decrement: (state) => ({ ...state, count: state.count - 1 }),
      },
    });
  */

  // counterSlice.counter.count
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const hanedleIncrement = () => {
    dispatch(increment());
  };

  const hanedleDecrement = () => {
    dispatch(decrement());
  };

  const hanedleIncrementByValue = () => {
    dispatch(incrementByValue(10));
  };
  return (
    <div className="flẽ flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2>
        [CounterReduxToolkitComponent] Count from Store ReduxToolkit is: {count}
      </h2>

      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={hanedleDecrement}
        >
          Decrement
        </button>

        <button
          className="inline-block p-2 border border-gray-200"
          onClick={hanedleIncrement}
        >
          Increment
        </button>

        <button
          className="inline-block p-2 border border-gray-200"
          onClick={hanedleIncrementByValue}
        >
          Increment + 10
        </button>
      </div>
    </div>
  );
};

export default CounterReduxToolkit;
