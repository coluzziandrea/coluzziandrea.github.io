import './Contacts.css';

function Contacts() {
  return (
    <>
      <section class='support'>
        <h2 class='support-title'>Support Me</h2>
        <div class='support-content'>
          <a
            class='primary-button'
            href='https://www.buymeacoffee.com/coluzziandrea'
            target='_blank'
          >
            Buy Me a Coffee
          </a>
        </div>
      </section>
      <section class='contact' id='contact'>
        <h2>Get In Touch With Me</h2>
        <div class='contact-form-container'>
          <div class='contact-form'>
            <form action='https://formspree.io/f/xjvjzjyv' method='POST'>
              <div class='form-control'>
                <label for='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='_replyto'
                  placeholder='Enter Your Email'
                  class='input-field'
                  required
                />
              </div>
              <div class='form-control'>
                <label for='message'>Message</label>
                <textarea
                  id='message'
                  cols='60'
                  rows='10'
                  placeholder='Enter Your Message'
                  name='message'
                  class='input-field'
                  required
                ></textarea>
              </div>
              <input
                type='submit'
                id='submit-btn'
                value='Submit'
                class='primary-button submit-btn'
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
