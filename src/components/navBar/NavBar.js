import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Burger from './burger/Burger';
import Logo from '../../assets/img/htecLogo.png';
import NewsBtn from './newsBtn/NewsBtn';
import classes from './NavBar.module.css';
import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

/**
 * Main navigation bar with main menu.
 */

const NavBar = () => {
  const [newsActiveGB, setnewsActiveGB] = useState(true);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const state = useSelector((state) => state.topNewsReducer);
  const stateCat = useSelector((state) => state.categoriesReducer);

  const dispatch = useDispatch();

  const clickBurgerHandler = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const newsBtnHandler = (id) => {
    setnewsActiveGB(id === 'gb' ? true : false);

    //Alternative approach

    // dispatch(
    //   location.pathname.includes('categories')
    //     ? actionsCat.categoriesAction(id, stateCat.category)
    //     : actions.topNewsAction(id)
    // );

    dispatch(actions.topNewsAction(id));
    dispatch(actionsCat.categoriesAction(id, stateCat.category));
  };
  return (
    <>
      <nav role="menu" className={classes.navbar}>
        <img alt="logo" src={Logo} className={classes.logo} alt="Logo" />
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
            onClick={clickBurgerHandler}
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
            onClick={clickBurgerHandler}
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
            onClick={clickBurgerHandler}
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
        />
      </nav>
    </>
  );
};

export default NavBar;
