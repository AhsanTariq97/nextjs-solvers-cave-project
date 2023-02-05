import React, { useState } from 'react'
import Button from './Button'


const ContactForm = ({width}) => {

  const validator = require('validator');
  
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      setNameErr('Enter your name')
    } else {
      setNameErr('')
    }

    if (!validator.isEmail(email)) {
      setError('Invalid email address');
      return;
    } else {
      setError('')
    }

    // continue with the rest of the form submission process
  }

  return (
    <div className={`flex flex-1 flex-col justify-between items-center space-y-4 w-full md:max-w-lg px-4 py-8 text-[#0f0c45] bg-[#E7E8E9]/80 md:${width}`}>
        <h1 className='text-2xl font-semibold text-center'>Let's Connect to help you and your Business.</h1>
        <div className='flex flex-col justify-between items-center w-4/5 space-y-4'>
            <div className='relative w-full'>
              <input className='px-4 py-2 w-full outline-none' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              {name === '' ? <p className='absolute -top-4 text-xs text-red-600 w-full px-4'>{nameErr}</p> : <></>}
            </div>
            <div className='relative w-full'>
              <input className='px-4 py-2 w-full outline-none' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
              {error !== '' ? <p className='absolute -top-4 text-xs text-red-600 w-full px-4'>{error}</p> : <></>}
            </div>
            <input className='px-4 py-2 w-full outline-none' type="tel" pattern='[0-9()#&+*-=.]+' title="Please enter a valid phone number" placeholder='Phone Number'/>
            <textarea className='px-4 py-2 w-full outline-none' type="text" rows={4} placeholder='What can we do for you?'></textarea>
        </div>
        <Button onClick={handleSubmit} type='submit' bgColor='#58ae57' text='Jump-start your Projects' />
    </div>
  )
}

export default ContactForm