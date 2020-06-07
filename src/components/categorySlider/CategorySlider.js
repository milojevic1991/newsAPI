import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NewsItemCategory from '../newsItemCategory/NewsItemCategory';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Loader from 'react-loader-spinner';
import classes from './CategorySlider.module.css';
import * as actions from '../../store/actions/categories';
import shortid from 'shortid';

/**
 * Slider component with news items. Displayed on the Categories page.
 */

const CategorySlider = ({ country, category }) => {
  const state = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //When render, calls API
    dispatch(actions.categoriesAction(`${country}`, `${category}`));
  }, [dispatch, country, category]);

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
    <section className={classes.category}>
      <Link className={classes.sliderCategory} to={`/categories/${category}`}>
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
    </section>
  );
};

export default CategorySlider;

CategorySlider.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
