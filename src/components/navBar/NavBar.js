import React, { useEffect, useState } from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

import Burger from './burger/Burger';
import classes from './NavBar.module.css';
import Logo from '../../assets/img/htecLogo.png';
import NewsBtn from './newsBtn/NewsBtn';

import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

const NavBar = () => {
  const [newsActiveGB, setnewsActiveGB] = useState(true);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.topNewsReducer);
  const stateCat = useSelector((state) => state.categoriesReducer);

  const clickBurgerHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const newsBtnHandler = (id) => {
    dispatch(actions.topNewsAction(id));
    dispatch(actionsCat.categoriesAction(id, stateCat.category));

    setnewsActiveGB(id === 'gb' ? true : false);
  };
  return (
    <>
      <nav className={classes.navbar}>
        <img alt="logo" src={Logo} className={classes.logo}></img>
        <ul
          className={
            isBurgerActive
              ? [classes.navLinks, classes.navActive].join(' ')
              : classes.navLinks
          }
        >
          <NavLink
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to="/"
          >
            Top News
          </NavLink>
          <NavLink
            // exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to="/categories"
          >
            Categories
          </NavLink>
          <NavLink
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            to="/search"
          >
            Search
          </NavLink>
        </ul>
        <Burger clickBurger={clickBurgerHandler} active={isBurgerActive} />
        <NewsBtn
          isDisabledCat={stateCat.fullView}
          isDisabled={state.fullView}
          newsBtnClick={newsBtnHandler}
          newsBtnActiveGB={newsActiveGB}
          // newsBtnActiveGB={state.isGB}
        />
      </nav>
    </>
  );
};

export default NavBar;
