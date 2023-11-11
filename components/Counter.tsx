import React, { useState } from 'react';
import axios from 'axios';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    setCount(prevCount => prevCount + 1);
    try {
      const response = await axios.post('/api/counter', { count: count + 1 });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl">{count}</span>
      <button onClick={incrementCount} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Increase</button>
    </div>
  );
};

export default Counter;