"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {children}
      {/* Render the footer only when showFooter is true */}
      {showFooter && <Footer />}
    </div>
  );
}
