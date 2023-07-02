import "./App.css";
import { useSelector } from "react-redux";
// import CounterRedux from "./components/CounterRedux";
import CounterReduxToolkit from "./components/CounterReduxToolkit";
import Card from "./components/Card";
import ToogleDarkMode from "./components/ToogleDarkMode";

function App() {
  /* =================== Start redux =================== */

  /* 
    const reducer = combineReducers({
      counter: counterReducer, // key: value
    });
  */
  /* =================== End redux =================== */

  // reducer.counter.count
  const { count } = useSelector((state) => state.counter);

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
      <br />
      <hr /> <br />
      <ToogleDarkMode></ToogleDarkMode>
      <div className="flex justify-center items-center pt-5">
        <Card></Card>
        <Card></Card>
      </div>
      <br />
    </div>
  );
}

export default App;
