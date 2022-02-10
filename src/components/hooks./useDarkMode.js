// import React from "react";
import useLocalStorage from "./useLocalStorage";
// import { useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  //   const toggleMode = (e) => {
  //     e.preventDefault();
  //     props.setDarkMode(!props.darkMode);
  //   };
  return [darkMode, setDarkMode];
};
export default useDarkMode;
