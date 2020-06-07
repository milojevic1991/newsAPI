import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Categories.module.css';
import Title from '../../components/UI/title/Title';
import CategorySlider from '../../components/categorySlider/CategorySlider';
import * as actions from '../../store/actions/topNews';
import * as actionCat from '../../store/actions/categories';

/**
 * Category Main component.Displays all the slider from categories.
 */

const Categories = () => {
  const state = useSelector((state) => state.topNewsReducer.isGB);

  const dispatch = useDispatch();
  let countryShort = state ? 'gb' : 'us';

  const CATEGORY_DATA = [
    { country: countryShort, category: 'sports' },
    { country: countryShort, category: 'technology' },
    { country: countryShort, category: 'science' },
    { country: countryShort, category: 'business' },
    { country: countryShort, category: 'health' },
  ];

  useEffect(() => {
    dispatch(actions.readMoreBtnEnable());
    dispatch(actionCat.readMoreBtnCatEnable());
  }, [dispatch]);

  return (
    <div className={classes.categoriesWrapp}>
      <Title
        title={'Top 5 news by categories from'}
        country={state ? 'Great Britain' : 'USA'}
      />

      {CATEGORY_DATA.map((catData, i) => (
        <CategorySlider
          key={i}
          country={catData.country}
          category={catData.category}
        />
      ))}
    </div>
  );
};

export default Categories;
