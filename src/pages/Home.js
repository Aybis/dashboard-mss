import React from 'react';
import { Loading } from '../components';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 flex justify-center items-center">
      <Loading height={10} color="text-sky-500" />
    </div>
  );
}
