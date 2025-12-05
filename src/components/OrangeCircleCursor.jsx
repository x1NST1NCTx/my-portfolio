// OrangeCircleCursor.jsx
import React, { useEffect, useState } from 'react';

const OrangeCircleCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [overText, setOverText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverSelectors =
      'p, span, a, h1, h2, h3, h4, h5, h6, li, input, textarea, button, label, img';

    const handleEnter = () => setOverText(true);
    const handleLeave = () => setOverText(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    const hoverElements = document.querySelectorAll(hoverSelectors);
    hoverElements.forEach((el) => {
      el.addEventListener('pointerenter', handleEnter);
      el.addEventListener('pointerleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
      hoverElements.forEach((el) => {
        el.removeEventListener('pointerenter', handleEnter);
        el.removeEventListener('pointerleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <div
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          border: '2px solid #FF6A00',
          backgroundColor: overText ? 'transparent' : '#FF6A00',
          // same radius, softer brightness
boxShadow: overText
  ? '0 0 90px 30px rgba(255,255,255,0.05)'
  : '0 0 110px 40px rgba(255,255,255,0.10)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 2147483647,
          transition:
            'background-color 0.15s ease, box-shadow 0.15s ease, transform 0.05s ease',
        }}
      />
    </>
  );
};

export default OrangeCircleCursor;
