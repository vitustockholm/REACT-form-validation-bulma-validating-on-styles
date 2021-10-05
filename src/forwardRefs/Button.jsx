import React, { forwardRef } from 'react';

const Button = ({ text, action }, ref) => {
  return (
    <button onClick={action} ref={ref}>
      {text}
    </button>
  );
};

export default forwardRef(Button);
