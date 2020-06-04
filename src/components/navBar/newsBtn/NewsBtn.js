import React from 'react';
import classes from './NewsBtn.module.css';

const NewsBtn = ({ newsBtnClick, newsBtnActiveGB }) => {
  return (
    <>
      <div className={classes.btnWrapp}>
        <button
          onClick={() => newsBtnClick('gb')}
          className={newsBtnActiveGB ? classes.active : classes.newsBtn}
        >
          GB
        </button>
        <button
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
