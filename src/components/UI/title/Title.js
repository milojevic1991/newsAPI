import React from 'react';
import PropTypes from 'prop-types';
import classes from './Title.module.css';

const Title = ({ title, style, country = '', errorTitle = false }) => {
  return (
    <h1
      style={{ ...style }}
      className={errorTitle ? classes.errorTitle : classes.title}
    >{`${title} ${country}`}</h1>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  country: PropTypes.string,
  errorTitle: PropTypes.string,
};
