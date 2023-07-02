import "./App.css";
import { useSelector } from "react-redux";
// import CounterRedux from "./components/CounterRedux";
import CounterReduxToolkit from "./components/CounterReduxToolkit";

function App() {
  /* =================== Start redux =================== */

  /* 
    const reducer = combineReducers({
      counter: counterReducer, // key: value
    });
  */

  // reducer.counter.count
  const { count } = useSelector((state) => state.counter); // for redux
  /* =================== End redux =================== */

  return (
    <div>
      {/* <div>
        <h2>The count from Store Redux is: {count}</h2>
        <CounterRedux></CounterRedux>
      </div> */}

      <div>
        [AppComponent] Count from Store ReduxToolkit is: {count}
        <CounterReduxToolkit></CounterReduxToolkit>
      </div>
    </div>
  );
}

export default App;
