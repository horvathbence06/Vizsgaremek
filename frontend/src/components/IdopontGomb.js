import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function IdopontGomb() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ right: '-170px' });

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newRight = Math.max(window.innerWidth - touch.clientX - 20, 0); 
      setPosition({ right: `${newRight}px` });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (parseInt(position.right) < 0) {
      setPosition({ right: '-170px' });
    } else {
      setPosition({ right: '20px' });
    }
  };

  useEffect(() => {
    if (!isDragging) {
      setPosition({ right: hover ? '20px' : '-170px' });
    }
  }, [hover, isDragging]);

  return (
    <Button
      onClick={() => navigate('/idopontfoglalas')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        backgroundColor: '#9c7b48ff',
        color: '#0d0d0dff',
        fontWeight: 'bold',
        height: '200px',
        width: '200px',
        border: '2px dashed black',
        borderRadius: '50%',
        position: 'fixed',
        bottom: '20px',
        right: position.right, 
        transition: 'right 0.5s ease',
        zIndex: 1000,
        cursor: 'pointer'
      }}
    >
      Időpontfoglalás
    </Button>
  );
}

export default IdopontGomb;