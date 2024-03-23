import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../feature/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <div>
      <header className='flex items-center justify-between mt-3'>
        <div className='logo'>
            <Link to='/'>Goal Setter</Link>
        </div>
        <ul className='flex items-center mr-4'>
          {/* <>
           <li className='mr-3'>
                <button className='flex items-center' onClick={onLogout}>
                    <FaSignOutAlt />Log out
                </button>
            </li>
            <li>
                <Link to='/register' className='flex items-center'>
                    <FaUser />Register
                </Link>
            </li> </> */}
             <>
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
            </>
        </ul>
      </header>
    </div>
  )
}

export default Header
