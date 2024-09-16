// components/shared/VantaClouds.tsx
"use client"; // Ensure it runs only on the client side
import { useEffect, useRef } from 'react';

// Extend the window object to include VANTA
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaClouds = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    const loadVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
        vantaEffect = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        });
      }
    };

    // Dynamically load Three.js and Vanta.js from the CDN
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.async = true;
    document.body.appendChild(threeScript);

    const vantaScript = document.createElement('script');
    vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.clouds.min.js';
    vantaScript.async = true;
    vantaScript.onload = loadVanta;
    document.body.appendChild(vantaScript);

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up the effect on component unmount
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Make sure it's behind the content
      }}
    />
  );
};

export default VantaClouds;
