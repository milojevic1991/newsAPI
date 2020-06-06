import React, { useEffect } from 'react';
import classes from './Categories.module.css';
import CategorySlider from '../../components/categorySlider/CategorySlider';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log('PARAMETRI', id);
  const state = useSelector((state) => state.topNewsReducer.isGB);

  let countryShort = state ? 'gb' : 'us';
  //   console.log('ZEMLJA DA LI SE MENJA', countryShort);

  const CATEGORY_DATA = [
    { country: countryShort, cat: 'sports' },
    // { country: countryShort, cat: 'sports' },
    { country: countryShort, cat: 'health' },
    // { country: state ? 'gb' : 'us', cat: 'health' },
    // { country: state ? 'gb' : 'us', cat: 'sports' },
  ];

  useEffect(() => {
    dispatch(actions.readMoreBtnCatEnable());
  }, [dispatch]);

  return (
    <div className={classes.categoriesWrapp}>
      <h1>Top 5 news by categories from {state ? 'Great Britain' : 'USA'}</h1>

      {CATEGORY_DATA.map((catData) => (
        <CategorySlider
          country={catData.country}
          cat={catData.cat}
          // cat={'sisa'}
        />
      ))}
      {/* <CategorySlider country={'gb'} cat={'business'} /> */}
    </div>
  );
};

export default Categories;
