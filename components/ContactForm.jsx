import React, { useState, useEffect } from 'react'
import Button from './Button'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import submitFormData from '@/pages/api/airtable'


const ContactForm = ({width}) => {

  // Email Validator
  const validator = require('validator');
  
  // Using states for the input values
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState('')
  const [message, setMessage] = useState('')

  // Submission Status value
  const [submissionStatus, setSubmissionStatus] = useState('idle')

  // On submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Checking for valid email, name and phone number
    if (!validator.isEmail(email) || name === '' || phone === '') {
      validator.isEmail(email) ? setEmailError('') : setEmailError('Invalid email address')
      name === '' ? setNameErr('Enter your name') : setNameErr('')
      phone === '' || undefined ? setPhoneErr('Enter your contact number') : setPhoneErr('')
      return;
    }
    

    setSubmissionStatus('submitting')

    const clientData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    console.log(process.env.AIRTABLE_API_KEY)
    // console.log(clientData)

    submitFormData(clientData, submissionStatus, setSubmissionStatus);

    setName('')
    setNameErr('')
    setEmail('')
    setEmailError('')
    setPhone('')
    setPhoneErr('')
    setMessage('')
  }

  // Displaying the text if form is successfully submitted or it failed
  useEffect(() => {
    if (submissionStatus === 'submitted') {
      setTimeout(() => {
        setSubmissionStatus('');
      }, 2000);
    } else if (submissionStatus === 'failed') {
      setTimeout(() => {
        setSubmissionStatus('');
      }, 2000)
    }
  }, [submissionStatus, setSubmissionStatus]);

  return (
    <div className={`flex flex-1 flex-col justify-between items-center space-y-4 w-full md:max-w-lg px-8 py-8 text-[#0f0c45] bg-[#E7E8E9]/90 md:${width}`}>
        <h1 className='text-2xl font-semibold text-center'>Let's Connect to help you and your Business.</h1>
        <div className='flex flex-col justify-between items-center w-full space-y-6'>
            <div className='relative w-full'>
              <input className='px-4 py-2 w-full outline-none' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              {name === '' ? <p className='absolute -bottom-[22px] text-base text-red-600 w-full px-4'>{nameErr}</p> : <></>}
            </div>
            <div className='relative w-full'>
              <input className='px-4 py-2 w-full outline-none' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
              {emailError !== '' ? <p className='absolute -bottom-[22px] text-base text-red-600 w-full px-4'>{emailError}</p> : <></>}
            </div>
            <div className='relative w-full'>
              <div className='px-4 py-2 outline-none bg-white'>
                <PhoneInput className='input-phone-number' defaultCountry="US" placeholder='Phone Number' value={phone} onChange={setPhone} required/>
                {phone === '' ? <p className='absolute -bottom-[22px] text-base text-red-600 w-full'>{phoneErr}</p> : <></>}
              </div>
            </div>
            <textarea className='px-4 py-2 w-full outline-none' type="text" rows={4} placeholder='What can we do for you?' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <Button onClick={handleSubmit} type='submit' bgColor='#58ae57' text='Jump-start your Projects' />

        {submissionStatus === 'submitting' && <div className='bg-yellow-500 py-2 px-4'><p>Submitting form...</p></div>}
        {submissionStatus === 'submitted' && <div className='bg-green-500 py-2 px-4'><p>Form submitted successfully!</p></div>}
        {submissionStatus === 'failed' && <div className='bg-red-500 py-2 px-4'><p>Failed to submit form. Please try again.</p></div>}
    </div>
  )
}

export default ContactForm