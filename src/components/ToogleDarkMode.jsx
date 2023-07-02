import { useSelector, useDispatch } from "react-redux";

import { toggleDarkMode } from "../redux-toolkit/global/globalSlice";
import useDarkMode from "../hooks/useDarkMode";
import { useEffect } from "react";

const ToogleDarkMode = () => {
  const dispatch = useDispatch();
  // const { darkMode: darkModeStore } = useSelector((state) => state.global);

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode)); // dispatch current darkmode sync to Store
  }, []);

  const handleToogleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  return (
    <div className="flex justify-center">
      <button
        className="block p-4 font-semibold text-center text-white bg-blue-500 card-details rounded-2xl"
        onClick={handleToogleDarkMode}
      >
        Toggle dark mode
      </button>
    </div>
  );
};

export default ToogleDarkMode;
