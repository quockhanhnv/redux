import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterReducer";

const CounterRedux = () => {
  /* 
    const reducer = combineReducers({
      counter: counterReducer, // key: value
    });
  */

  // reducer.counter.count
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const hanedleIncrement = () => {
    dispatch(increment());
  };

  const hanedleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flẽ flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count from CounterRedux component: {count}</h2>

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
      </div>
    </div>
  );
};

export default CounterRedux;
