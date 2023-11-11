import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AgeGate: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleDeny = () => {
    router.push('/underage');
  };

  if (confirmed) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl mb-4">Are you 21 or older?</h2>
        <div className="flex justify-center space-x-4">
          <button onClick={handleConfirm} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Yes</button>
          <button onClick={handleDeny} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">No</button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;