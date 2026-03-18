import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const BackgroundGlobe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = Math.PI; // starting position
    let width = 0;
    
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.1, // Near equator viewing
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 14000, 
      mapBrightness: 6,
      baseColor: [0.5, 0.5, 0.6], // increased brightness
      markerColor: [1, 0, 0], 
      glowColor: [0.2, 0.2, 0.3], // slightly intensified atmospheric glow
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.0015; // Slow, cinematic spin
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -40%)', // Centered but slightly pulled down
      width: '120vw',       // Make it massive by default
      height: '120vw', 
      minWidth: '1000px',   // Ensure it doesn't shrink to tiny on mobile
      minHeight: '1000px',
      zIndex: -3, 
      pointerEvents: 'none',
      opacity: 0.35,        // Increased visibility significantly
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
};

export default BackgroundGlobe;
