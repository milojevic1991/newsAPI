import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './Categories.module.css';
import Title from '../../components/UI/title/Title';
import CategorySlider from '../../components/categorySlider/CategorySlider';
import * as actions from '../../store/actions/categories';

//Unique key
import shortid from 'shortid';

const Categories = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const state = useSelector((state) => state.topNewsReducer.isGB);

  let countryShort = state ? 'gb' : 'us';

  const CATEGORY_DATA = [
    { country: countryShort, category: 'sports' },
    { country: countryShort, category: 'technology' },
    { country: countryShort, category: 'science' },
    { country: countryShort, category: 'business' },
    { country: countryShort, category: 'health' },
  ];

  useEffect(() => {
    dispatch(actions.readMoreBtnCatEnable());
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
