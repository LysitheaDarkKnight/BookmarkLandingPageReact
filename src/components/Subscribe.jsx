import { useState } from "react"

function Subscribe() {

  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(email === '') {
      setErrorMsg('Email is required');
      console.log(6)

  } else if (!isValidEmail(email)) {
      setErrorMsg('Provide a valid email address');
      console.log(2)

  } else {
    setErrorMsg('');
      console.log(1)
  }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="subscribe">
      <div className="container">
        <p>35,000+ already joined</p>
        <h3>Stay up-to-date with what we're doing</h3>
        <form onSubmit={handleSubmit}>
          <div className= {`email-input ${errorMsg? 'error-bg' : ''}`} >
            <input onChange={handleEmailChange} type="text" className="email" placeholder="Enter your email address"/>
            {errorMsg && <div className='message'>{errorMsg}</div>}
          </div>
          <input type="submit" className="btn btn-submit" value='Contact Us' />
        </form>
      </div>
    </div>
  )
}

export default Subscribe
