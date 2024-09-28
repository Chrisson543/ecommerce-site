import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function AddToCartButton({buttonText, message, addItem}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    const canAddItem = addItem();
    canAddItem && setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='w-fit bg-[#333] flex mt-7'>
      <Button 
        className='w-fit text-sm px-5 py-3 text-white'
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
