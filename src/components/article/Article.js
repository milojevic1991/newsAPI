import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import shortid from 'shortid';
import classes from './Article.module.css';
import { motion } from 'framer-motion';

/**
 *Article component for displaying full page viewing
 */

const Article = ({ topNewsDataFull }) => {
  let history = useHistory();
  return (
    <>
      {topNewsDataFull.length !== 0 ? (
        topNewsDataFull.map((newsData) => (
          <motion.article
            role="article"
            key={shortid.generate()}
            className={classes.articleWrapp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={newsData.urlToImage} alt="Article Banner" />
            <h1>{newsData.title}</h1>
            <p>{newsData.content}</p>
            <button
              aria-label="Back to list"
              className={classes.backButton}
              onClick={() => history.goBack()}
            >
              Back to list
            </button>
          </motion.article>
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
