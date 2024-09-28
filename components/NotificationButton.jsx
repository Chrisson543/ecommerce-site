import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function NotificationButton({buttonText, message}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='w-full bg-[#333] flex'>
      <Button 
        className='w-full text-white py-5 px-3'
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
            opacity: 1
          }
        }}
        onClick={handleClick}>
          {buttonText}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}
