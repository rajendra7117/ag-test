import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='header'>
        <h1>Templates</h1>
        <div>
            <NavLink to="/">Template</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    </div>
  )
}

export default Header