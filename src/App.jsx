import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className='first'>
        <div className='login'>
          <img className='image1' src='https://admin.workplanx.dev/beta-mark.svg'>
          </img>
          <div className='form-container'>
            <img className='image2' src='https://admin.workplanx.dev/new-workplanXlogo.svg'>
            </img>
            <div className='log'>Login to your  account</div>
            <div className=''>
              <p className='email'>Email</p>
              <input className='email-address' placeholder='Enter your email address'></input>
            </div>
            <div className='ram'>
              <div className='text3'> Use mobile instead?</div>
              <button className='button'>log in to your account</button>
            </div>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className='overlay'>
          <div>
            <img className='image3' src='https://admin.workplanx.dev/doubleQuote.svg'>
            </img>
            <p className='second-text'>Delegation made <br /> easy</p>
          </div>
          <img className='image4' src='https://admin.workplanx.dev/white-logo.svg'>
          </img>

        </div>
        <video className='video' muted
          playsInline
          src="https://admin.workplanx.dev/login-info-video.mp4" autoPlay={true} loop>
        </video>
      </div>
    </div>
  )
}

export default App
