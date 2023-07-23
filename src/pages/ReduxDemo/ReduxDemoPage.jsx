import CounterReduxToolkit from "../../components/CounterReduxToolkit";
import { useSelector } from "react-redux";

const ReduxDemoPage = () => {
  // reducer.counter.count
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="p-4">
      [AppComponent] Count from Store ReduxToolkit is: {count}
      <CounterReduxToolkit></CounterReduxToolkit>
    </div>
  );
};

export default ReduxDemoPage;
