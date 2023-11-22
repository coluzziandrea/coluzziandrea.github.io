import React from 'react'
import './Contacts.css'

function Contacts() {
  return (
    <>
      <section className='support'>
        <h2 className='support-title'>Support Me</h2>
        <div className='support-content'>
          <a
            className='primary-button'
            href='https://www.buymeacoffee.com/coluzziandrea'
            target='_blank'
            rel='noreferrer'
          >
            Buy Me a Coffee
          </a>
        </div>
      </section>
      <section className='contact' id='contact'>
        <h2>Get In Touch With Me</h2>
        <div className='contact-form-container'>
          <div className='contact-form'>
            <form action='https://formspree.io/f/xjvjzjyv' method='POST'>
              <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='_replyto'
                  placeholder='Enter Your Email'
                  className='input-field'
                  required
                />
              </div>
              <div className='form-control'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  cols='60'
                  rows='10'
                  placeholder='Enter Your Message'
                  name='message'
                  className='input-field'
                  required
                ></textarea>
              </div>
              <input
                type='submit'
                id='submit-btn'
                value='Submit'
                className='primary-button submit-btn'
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
