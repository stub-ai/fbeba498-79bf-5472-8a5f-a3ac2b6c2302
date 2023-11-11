import React from 'react';

const Underage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Sorry, you must be 21 or older to access this site.</h1>
        <p className="text-xl">Please come back when you are 21 or older.</p>
      </div>
    </div>
  );
};

export default Underage;