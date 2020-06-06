import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

//Unique key
import shortid from 'shortid';
import classes from './Article.module.css';

const Article = ({ topNewsDataFull }) => {
  let history = useHistory();
  return (
    <>
      {topNewsDataFull.length !== 0 ? (
        topNewsDataFull.map((newsData) => (
          <div key={shortid.generate()} className={classes.articleWrapp}>
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
    </>
  );
};

export default Article;

Article.propTypes = {
  topNewsDataFull: PropTypes.array.isRequired,
};
