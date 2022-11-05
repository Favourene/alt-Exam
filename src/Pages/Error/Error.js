import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <>
      <section className='error'>
        <div>
          <img
            src='https://res.cloudinary.com/ounje-bazaar/image/upload/v1646878210/Ounje-bazaar/Images/lf20_kcsr6fcp.json_h8xphx.png'
            alt=''
          />
          <h1>Something's Wrong</h1>
          <Link to='/'>
            <button>Back to Home</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Error
