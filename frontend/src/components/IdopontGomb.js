import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function IdopontGomb() {
  const navigate = useNavigate(); 

  return (
    <Button 
      onClick={() => navigate('/idopontfoglalas')} 
      sx={{
        backgroundColor: '#9c7b48ff',
        color: '#0d0d0dff',
        fontWeight: 'bold',
        height: '200px',
        width: '200px',
        border: '2px dashed black',
        borderRadius: '50%',
        right: '20px',
        bottom: '20px',
        position: 'fixed',
        zIndex: 1000
      }}
    >
      Időpontfoglalás
    </Button>
  );
}

export default IdopontGomb;
