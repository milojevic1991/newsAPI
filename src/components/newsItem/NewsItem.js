import React from 'react';
import classes from './NewsItem.module.css';
import { Link } from 'react-router-dom';

const NewsItem = ({ topNewsData }) => {
  return (
    <>
      {Object.values(topNewsData).map((newsData, index) => (
        <div className={classes.newsItemWrapp}>
          <div className={classes.newsItemHeader}>
            <img src={newsData.urlToImage} />
          </div>
          <div className={classes.newsItemText}>
            <h2>{newsData.title}</h2>
            <p>{newsData.description}</p>
          </div>
          <Link
            onClick={() => console.log('LINK KLIK', newsData.title)}
            to={`/${newsData.description}`}
          >
            Read more...
          </Link>
        </div>
      ))}
    </>
  );
};

export default NewsItem;
