import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NewsItemCategory from '../newsItemCategory/NewsItemCategory';
import NewsItem from '../newsItem/NewsItem';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Loader from 'react-loader-spinner';
import classes from './CategorySlider.module.css';
import * as actions from '../../store/actions/categories';

//Unique key
import shortid from 'shortid';

const CategorySlider = ({ country, category }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categoriesReducer);
  const stateCountry = useSelector((state) => state.topNewsReducer.isGB);

  useEffect(() => {
    dispatch(actions.categoriesAction(`${country}`, `${category}`));
  }, [stateCountry]);

  useEffect(() => {}, [stateCountry]);

  const sliderItems = state[category]
    ? state[category].map((newsItem) => {
        return (
          <NewsItemCategory
            key={shortid.generate()}
            category={category}
            newsDataCat={newsItem}
          ></NewsItemCategory>
        );
      })
    : [<Loader type="Oval" color="#b0b0b0" height={100} width={100} />];

  return (
    <div className={classes.category}>
      <Link
        className={classes.sliderCategory}
        // onClick={() => dispatch(actions.readMoreBtn(newsData.title))}
        // onClick={() => console.log('cao')}
        to={`/categories/${category}`}
      >
        {`${category}`}
      </Link>

      <div className={classes.sliderWrapp}>
        <Carousel
          style={{ background: 'red;' }}
          slidesPerPage={4}
          breakpoints={{
            850: {
              slidesPerPage: 1,
              arrows: false,
            },
            1200: {
              slidesPerPage: 2,
              arrows: true,
            },

            1590: {
              slidesPerPage: 3,
              arrows: true,
            },
          }}
          slides={sliderItems}
          arrows
          clickToChange
        />
      </div>
    </div>
  );
};

export default CategorySlider;

CategorySlider.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
