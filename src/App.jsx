import "./App.css";
import { useSelector } from "react-redux";

import CounterReduxToolkit from "./components/CounterReduxToolkit";
import Card from "./components/Card";
import ToogleDarkMode from "./components/ToogleDarkMode";
import HackerNews from "./components/HackerNews/HackerNews";
import Navbar from "./components/Navbar/Navbar";

import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
