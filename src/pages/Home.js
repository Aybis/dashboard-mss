import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components';

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/dashboard');
    }, 600);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative min-h-screen bg-zinc-50 flex justify-center items-center">
      <Loading height={10} color="text-sky-500" />
    </div>
  );
}
