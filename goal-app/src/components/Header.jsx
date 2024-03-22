import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex items-center justify-between mt-3'>
        <div className='logo'>
            <Link to='/'>Goal Setter</Link>
        </div>
        <ul className='flex items-center mr-4'>
            <li className='mr-3'>
                <Link to='/login' className='flex items-center'>
                    <FaSignInAlt />Login
                </Link>
            </li>
            <li>
                <Link to='/register' className='flex items-center'>
                    <FaUser />Register
                </Link>
            </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
