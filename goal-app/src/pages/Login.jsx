import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../feature/auth/authSlice'


const Login = () => {
  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    } 

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  // const {name, email, password, password2} = formData;

  return (
    <div>
      <div className='text-center'>Login</div>
    <div>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <div>
        <form onSubmit={onSubmit}>
          <div className='email'>
            <label htmlFor='name'>Email</label>
            <input type='email'
             id='email' 
             name='email'
              value={email} 
              placeholder='enter your email' 
              onChange={((e) => setEmail(e).target.value)} />
          </div>
          <div className='password'>
            <label htmlFor='password'>Name</label>
            <input type='password'
             id='password' 
             name='password'
              value={password} 
              placeholder='enter your passwword' 
              onChange={((e) => setPassword(e).target.value)} />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Login
