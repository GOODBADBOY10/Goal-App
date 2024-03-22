import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
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
