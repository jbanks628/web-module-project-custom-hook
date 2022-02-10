import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [val, setVal] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse.localStorage.getItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const setStoredVal = (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
    setVal(newVal);
  };
  return [val, setStoredVal];
};

export default useLocalStorage;
