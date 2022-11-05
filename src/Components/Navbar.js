import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Navbar({ active }) {
  const [showNav, setShowNav] = useState('false')
  return (
    <div className='navbar'>
      <div className='bars'>
        <FaBars onClick={() => setShowNav(!showNav)} />
      </div>
      <ul className={showNav ? '' : 'active'}>
        <Link to='/'>
          <li className={active === 'home' ? 'active' : ''}>Home</li>
        </Link>
        <Link to='/repos'>
          <li className={active === 'repos' ? 'active' : ''}>Repos</li>
        </Link>
        <Link to='/error'>
          <li>404</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
