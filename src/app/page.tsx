'use client';

import { useState } from 'react';

import TimeForm from './components/TimeForm';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        {timeLeft && (
          <h2 className="mb-8 text-white text-2xl font-bold">{timeLeft}</h2>
        )}
      </div>
      <TimeForm onSetTimeLeft={setTimeLeft} />
    </main>
  );
}
