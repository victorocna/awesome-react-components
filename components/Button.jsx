import React from 'react';

const Button = ({ variant = 'primary', className, children, ...props }) => {
  const classes = ['form-button', `form-button-${variant}`];
  if (className) {
    classes.push(className);
  }

  return (
    <button type="button" className={classes.join(' ')} {...props}>
      {children}
    </button>
  );
};

export default Button;
