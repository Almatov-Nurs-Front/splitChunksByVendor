import React from 'react';
import classes from './Button.module.scss';


function Button(props) {
  const { children = 'click', color = 'primary', variant } = props;

  return (
    <button
      className={[
        classes.button,
        classes[color + (variant === 'contained' ? '' : variant ? `__${variant}` : '')] || '',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
