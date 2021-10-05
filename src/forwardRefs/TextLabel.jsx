import React, { forwardRef } from 'react';

const FormLabel = ({ text }, ref) => {
  return (
    <label ref={ref} className='label'>
      {text}
    </label>
  ); //uni-label - className => reusable Component => inniatial class instance css
};

export default forwardRef(FormLabel);
