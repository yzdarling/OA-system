import { useCallback } from 'react';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(1);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);

  return {
    count,
    increment,
    decrement,
  };
};
