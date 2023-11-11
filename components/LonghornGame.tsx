import React, { useState } from 'react';

const LonghornGame: React.FC = () => {
  const [guess, setGuess] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleGuess = () => {
    const actualWeight = Math.floor(Math.random() * 2000) + 500; // Texas Longhorns typically weigh between 500 and 2000 pounds
    const difference = Math.abs(actualWeight - (guess || 0));

    if (difference === 0) {
      setMessage('Congratulations! You guessed the exact weight!');
    } else if (difference <= 100) {
      setMessage(`Close guess! The actual weight was ${actualWeight} pounds.`);
    } else {
      setMessage(`Not even close. The actual weight was ${actualWeight} pounds.`);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guess">
            Guess the weight of the Texas Longhorn (in pounds)
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="guess" type="number" placeholder="Your guess" onChange={(e) => setGuess(Number(e.target.value))}/>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleGuess} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit Guess
          </button>
        </div>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default LonghornGame;