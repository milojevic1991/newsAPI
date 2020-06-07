import React from 'react';
import PropTypes from 'prop-types';
import classes from './Wrapper.module.css';

const Wrapper = ({ overflowOn = true, children }) => {
  return (
    <section
      style={{ overflow: overflowOn ? 'auto' : 'unset' }}
      className={classes.wrapper}
    >
      {children}
    </section>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  overflowOn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
