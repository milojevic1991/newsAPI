import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';

/**
 * Mobile burger.
 */

const Burger = ({ clickBurger, active }) => {
  return (
    <div
      onClick={clickBurger}
      className={
        active ? [classes.burger, classes.active].join(' ') : classes.burger
      }
    >
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </div>
  );
};

export default Burger;

Burger.propTypes = {
  clickBurger: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
