import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialState) => {
  const [item, setItem] = useState(initialState);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const getLocalStorage = () => {
    try {
      setTimeout(() => {        
        const getItemLocalStorage = localStorage.getItem(itemName);
        if (!getItemLocalStorage)
          localStorage.setItem(itemName, JSON.stringify(initialState));
        else setItem(JSON.parse(getItemLocalStorage));
        setloading(false);
      }, 2000);
    } catch (error) {
      setError(true)
      setloading(false)
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  const postItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, setItem, postItem, loading, error];
};

export { useLocalStorage };
