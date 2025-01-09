"use client"
import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<string>("");
  const [message, setMessage] = useState<string>("Hurry Up - Limited seats available!");

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("December 24, 2024 00:00:00").getTime();


    // Update the countdown every 1 second
    const x = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the remaining time
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // // Display the countdown
      // setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // If the countdown is over, display a message
      if (distance > 0) {
        clearInterval(x);
        setCountdown("EXPIRED");
        // setMessage("Booking period has ended - Sorry, no more seats available!");
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(x);
  }, []);

  return (
    // <div className="text-center p-4 md:p-6 bg-orange-500 rounded-lg shadow-md">
    //   <h1 className="text-lg md:text-2xl text-white font-bold mb-2 md:mb-4">Book Your Seat Now!</h1>
    //   <div id="countdown" className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-200 animate-bounce">{countdown}</div>
    //   <div id="message" className="text-sm md:text-lg text-white">{message}</div>
    // </div>
    <div></div>
  );
};

export default CountdownTimer;
