import React from 'react';
import classes from './Burger.module.css';

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
{
  /* <div className={[classes.menuBar, classes.first].join(' ')}></div>; */
}
