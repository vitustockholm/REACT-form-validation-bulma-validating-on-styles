import React, { forwardRef } from 'react';

const TextInput = ({ text, action }, ref) => {
  return <input type='text' className='input' ref={ref} onClick={action} />; //uni-input - className => reusable Component => inniatial class instance css
};

export default forwardRef(TextInput);
