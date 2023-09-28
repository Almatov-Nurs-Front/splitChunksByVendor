import React from 'react';
import Button from '@nurs/Button';


const App = () => {
  const handleClick = () => console.count('click');
  return (
    <>
      <Button onClick={handleClick} variant='contained'>asdasdasdsad</Button>
    </>
  );
};

export default App;
