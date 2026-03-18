import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const BackgroundGlobe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = Math.PI; 

    // PERFORMANCE FIX: 
    // Instead of rendering a massive 4k+ resolution canvas based on 120vw,
    // we lock the internal WebGL rendering string to 1000x1000 and let CSS hardware scale it up.
    // This reduces GPU memory and processing by over 80%.
    const renderSize = 1000;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1, // Downgrade pixel ratio to prevent retina 4x overhead
      width: renderSize,
      height: renderSize,
      phi: 0,
      theta: 0.1, 
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 10000, // Reduced from 14000 to save compute
      mapBrightness: 6,
      baseColor: [0.5, 0.5, 0.6], 
      markerColor: [1, 0, 0], 
      glowColor: [0.2, 0.2, 0.3], 
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.0015; 
        state.width = renderSize;
        state.height = renderSize;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -40%)', 
      width: '120vw',       
      aspectRatio: '1 / 1', 
      minWidth: '1000px',   
      zIndex: -3, 
      pointerEvents: 'none',
      opacity: 0.2,        
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
