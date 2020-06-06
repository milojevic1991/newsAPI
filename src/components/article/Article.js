import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import classes from './Article.module.css';
import Loader from 'react-loader-spinner';

const Article = ({ topNewsDataFull }) => {
  let history = useHistory();
  return (
    <>
      {topNewsDataFull.length !== 0 ? (
        topNewsDataFull.map((newsData, index) => (
          <div className={classes.articleWrapp}>
            <img src={newsData.urlToImage} />
            <h2>{newsData.title}</h2>
            <p>{newsData.content}</p>
            <button
              className={classes.backButton}
              onClick={() => history.goBack()}
            >
              Back to list
            </button>
          </div>
        ))
      ) : (
        <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
      )}

      {/* <h1>{children}</h1> */}
    </>
  );
};

export default Article;
