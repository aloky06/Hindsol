"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";

export default function Failed() {
  const router = useRouter();

  const [counter, setCounter] = useState(10);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        router.push('/');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, counter]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute   z-0 " />
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/failed.gif"
          alt="Payment Success"
          width="300"
          height="300"
          className="w-full max-w-sm"
        />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900 z-10">
         Unfortunately, Your Payment Failed. Please Try Again..
        </h1>
        <p className="mt-3 text-lg text-gray-600 z-10 w-full text-center ">
          You will be redirected to the HomePage in {counter} seconds.
        </p>
      </div>
    </div>
  );
}