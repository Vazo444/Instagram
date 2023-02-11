import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images' 
import { searchPosts, selectSearch } from '../../store/slices/search/searchSlices'


function Navbar() {

  const dispatch = useDispatch()

  const search = useSelector(selectSearch)

  const { pathname } = useLocation()

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            {
              pathname === '/'?
              <input type="text" value={search} onChange={(e) => {dispatch(searchPosts(e.target.value))}} className="search-box" placeholder="Search"/>:
              <></>
            }
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <NavLink to='/explore'><img src={IMAGES.explore} className="icon" alt=""/></NavLink>
                <NavLink to='/notification'><img src={IMAGES.like} className="icon" alt=""/></NavLink>
                <NavLink to='/profile'><img src={`https://www.mdgllc.net/wp-content/uploads/2018/02/user_img-300x284.png`} className="icon user-profile" /></NavLink>
                <NavLink to='/login'>LOG IN</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar