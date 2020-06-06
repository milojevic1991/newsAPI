import React, { Children } from 'react';
import classes from './Wrapper.module.css';

const Wrapper = ({ overflowOn = true, children }) => {
  return (
    <div
      style={{ overflow: overflowOn ? 'auto' : 'unset' }}
      className={classes.wrapper}
    >
      {children}
    </div>
  );
};

export default Wrapper;
