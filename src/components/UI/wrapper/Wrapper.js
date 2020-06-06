import React from 'react';
import PropTypes from 'prop-types';
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

Wrapper.propTypes = {
  overflowOn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
