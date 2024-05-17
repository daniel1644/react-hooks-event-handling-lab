// Code Keypad Component Here

import React, { useState } from 'react';

const Keypad = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log('Entering password...');
  };

  return (
    <input
      type="password"
      value={password}
      onChange={handlePasswordChange}
      placeholder="Enter password"
    />
  );
};

export default Keypad;