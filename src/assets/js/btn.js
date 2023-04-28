import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
    const [count, setCount] = useState(initialValue);

    const updateCount = (value) => {
        setCount(value);
    };

    const increment = () => {
        updateCount(count + 1);
    };

    const decrement = () => {
        updateCount(count - 1);
    };

    return {
        count,
        increment,
        decrement,
        setCount: updateCount,
    };
};