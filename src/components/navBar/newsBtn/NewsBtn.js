import React from 'react';
import PropTypes from 'prop-types';
import classes from './NewsBtn.module.css';

/**
 * Buttons Country component on header. Change the API country call when clicked.
 */

const NewsBtn = ({
  newsBtnClick,
  newsBtnActiveGB,
  isDisabled,
  isDisabledCat,
}) => {
  return (
    <>
      <div className={classes.btnWrapp}>
        <button
          disabled={isDisabled || isDisabledCat}
          onClick={() => newsBtnClick('gb')}
          className={newsBtnActiveGB ? classes.active : classes.newsBtn}
        >
          GB
        </button>
        <button
          disabled={isDisabled || isDisabledCat}
          onClick={() => newsBtnClick('us')}
          className={newsBtnActiveGB ? classes.newsBtn : classes.active}
        >
          US
        </button>
      </div>
    </>
  );
};

export default NewsBtn;

NewsBtn.propTypes = {
  newsBtnClick: PropTypes.func.isRequired,
  newsBtnActiveGB: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  isDisabledCat: PropTypes.bool,
};
