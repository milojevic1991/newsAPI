import React, { useEffect } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import classes from './CategorySlider.module.css';
import NewsItem from '../newsItem/NewsItem';
import NewsItemCategory from '../newsItemCategory/NewsItemCategory';

import * as actions from '../../store/actions/categories';
import { useSelector, useDispatch } from 'react-redux';

const CategorySlider = ({ country, cat }) => {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.topNewsReducer);
  const state = useSelector((state) => state.categoriesReducer);
  const stateCountry = useSelector((state) => state.topNewsReducer.isGB);

  useEffect(() => {
    dispatch(actions.categoriesAction(`${country}`, `${cat}`));
  }, [stateCountry]);

  useEffect(() => {}, [stateCountry]);

  //   const sliderItems =
  //     state.finished && !state.loading
  //       ? Object.values(state.cat).map((el) => {
  //           return <NewsItemCategory newsDataCat={el}></NewsItemCategory>;
  //         })
  //       : [<Loader type="Oval" color="#b0b0b0" height={100} width={100} />];

  const sliderItems = state[cat]
    ? state[cat].map((el) => {
        return (
          <NewsItemCategory category={cat} newsDataCat={el}></NewsItemCategory>
        );
      })
    : [<Loader type="Oval" color="#b0b0b0" height={100} width={100} />];

  return (
    <div className={classes.category}>
      {/* <h4 className={classes.sliderWrappTittle}></h4> */}
      <Link
        className={classes.sliderCategory}
        // onClick={() => dispatch(actions.readMoreBtn(newsData.title))}
        // onClick={() => console.log('cao')}
        to={`/categories/${cat}`}
      >
        {`${cat}`}
      </Link>

      <div className={classes.sliderWrapp}>
        <Carousel
          style={{ background: 'red;' }}
          slidesPerPage={4}
          //   value={this.state.value}
          //   onChange={this.onChange}
          slides={sliderItems}
          arrows
          clickToChange
        />
      </div>
    </div>
  );

  {
    /* {state.finished && !state.loading ? (
        <NewsItem topNewsData={state.topNewsArr} />
      ) : (
        <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
      )} */
  }
};

export default CategorySlider;
