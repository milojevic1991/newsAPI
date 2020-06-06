import React from 'react';
import PropTypes from 'prop-types';
import classes from './SearchInput.module.css';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className={classes.inputSearch}
      onChange={onChange}
      type="text"
      value={value}
      placeholder="Search term..."
    ></input>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
