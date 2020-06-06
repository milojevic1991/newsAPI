import React from 'react';
import classes from './Title.module.css';

const Title = ({ title, style, country = '' }) => {
  return (
    <h1
      style={{ ...style }}
      className={classes.title}
    >{`${title} ${country}`}</h1>
  );
};

export default Title;
