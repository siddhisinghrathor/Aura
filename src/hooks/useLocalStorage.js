import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // TODO: Synchronize state with localStorage and handle parsing errors
  const [storedValue, setStoredValue] = useState(() => {
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
