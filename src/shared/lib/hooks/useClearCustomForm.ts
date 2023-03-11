import { useState } from 'react';

export const useClearCustomForm = () => {
  const [clearFuncs, setClearFuncs] = useState<Function[]>([]);

  function addItem(func: Function) {
    setClearFuncs((state) => [...state, func]);
  }

  function clear() {
    clearFuncs.forEach((func) => {
      if (typeof func === 'function') func();
    });
  }

  return { addItem, clear };
};
