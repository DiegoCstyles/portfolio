"use client";
import { Navbar, Hero, Footer } from '@/components'
import { useState } from 'react';
import './styles/fadeIn.css';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  return (
      <main style={{
        backgroundImage: 'linear-gradient(45deg, #000000, #000000, #9CBBE2 )',
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 15s ease infinite',
        transform: 'translateY(var(--section-offset))'
      }} className="overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Circular Cursor */}
        <div className="circular-cursor absolute w-12 h-12 rounded-full bg-white bg-opacity-70 pointer-events-none"
            style={{ left: cursorPosition.x-22, top: cursorPosition.y-22 }}>
        </div>
        <Navbar/>
        <Hero/>
        <Footer/>
      </main>
  )
}
