import React from 'react';
import classes from './NewsBtn.module.css';

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
