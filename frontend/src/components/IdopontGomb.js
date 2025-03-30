import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function IdopontGomb() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Button
      onClick={() => navigate('/idopontfoglalas')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
        right: hover ? '20px' : '-170px', 
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
