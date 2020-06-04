import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './burger/Burger';
import classes from './NavBar.module.css';
import NewsBtn from './newsBtn/NewsBtn';

import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/topNews';

const NavBar = () => {
  const [newsActiveBG, setnewsActiveBG] = useState(true);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const dispatch = useDispatch();

  const clickBurgerHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const newsBtnHandler = (id) => {
    dispatch(actions.topNewsAction(id));
    setnewsActiveBG(id === 'gb' ? true : false);
  };
  return (
    <>
      <nav className={classes.navbar}>
        {/* <img alt="logo" src={Logo} className={classes.logo}></img> */}
        <ul
          className={
            isBurgerActive
              ? [classes.navLinks, classes.navActive].join(' ')
              : classes.navLinks
          }
        >
          <NavLink to="/">Top News</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/search">Search</NavLink>
        </ul>
        <Burger clickBurger={clickBurgerHandler} active={isBurgerActive} />
        <NewsBtn newsBtnClick={newsBtnHandler} newsBtnActiveGB={newsActiveBG} />
      </nav>
    </>
  );
};

export default NavBar;
