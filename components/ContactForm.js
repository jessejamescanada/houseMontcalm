import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xbjkpzyr',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <main
      id='contact'
      className='order-1 sm:order-3 sm:w-72'
    >
      <form
        onSubmit={handleOnSubmit}
        className='w-full max-w-sm'
      >
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              htmlFor='email'
              className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'
            >
              Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              id='name'
              type='name'
              name='_replyto'
              onChange={handleOnChange}
              required
              value={inputs.name}
              className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              htmlFor='email'
              className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'
            >
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              id='email'
              type='email'
              name='_replyto'
              onChange={handleOnChange}
              required
              value={inputs.email}
              className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              htmlFor='message'
              className='block text-neutral-50 font-bold md:text-right mb-1 md:mb-0 pr-4'
            >
              Message
            </label>
          </div>
          <div className='md:w-2/3'>
            <textarea
              id='message'
              name='message'
              onChange={handleOnChange}
              required
              value={inputs.message}
              className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3 text-center'>
            <button
              type='submit'
              disabled={status.submitting}
              className='shadow bg-stone-200 hover:bg-stone-400 hover:text-neutral-50 focus:shadow-outline focus:outline-none text-neutral-600 font-bold py-2 px-4 rounded'
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </div>
        </div>
      </form>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  )
}
