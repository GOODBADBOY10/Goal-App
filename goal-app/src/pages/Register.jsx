import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {

  const {name, setName} = useState('')
  const {email, setEmail} = useState('')
  const {password, setPassword} = useState('')
  const {password2, setPassword2} = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
  }

  // const {name, email, password, password2} = formData;

  return (
    <div>
      <div className='text-center'>Register</div>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <div>
        <form onSubmit={onSubmit}>
          <div className='name'>
            <label htmlFor='name'>Name</label>
            <input type='text'
             id='name' 
             name='name'
              value={name} 
              placeholder='enter your name' 
              onChange={((e) => setName(e).target.value)} />
          </div>
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
          <div className='password'>
            <label htmlFor='password2'>Name</label>
            <input type='password'
             id='password2' 
             name='password'
              value={password2} 
              placeholder='confirm your password' 
              onChange={((e) => setPassword2(e).target.value)} />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
