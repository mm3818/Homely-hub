import React from 'react';
import Filter from './Filter';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { propertyAction } from '../../Store/Property/property-slice';
import { getAllProperties } from '../../Store/Property/property-action';

const Header = () => {
    const dispatch=useDispatch()
    const allProperties=()=>{
      dispatch(propertyAction.updateSearchParams({}))
      dispatch(getAllProperties())
    }

  return (
    <>
      <nav className="header row sticky-top">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="logo"  onClick={allProperties}/>
        </Link>

        <div className="search_filter">
          <Search />
          <Filter />
        </div>
        <span class="material-symbols-outlined web_logo">
          account_circle
        </span>
      </nav>
    </>
  )
}

export default Header;