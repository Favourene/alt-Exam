import React from 'react'
import Spinner from './spinner.gif'
import './Loading.scss'

function Loading() {
  return (
    <div className='loading-wrapper'>
      <div className='loading-content'>
        <img src={Spinner} alt='loading...' />
      </div>
    </div>
  )
}

export default Loading