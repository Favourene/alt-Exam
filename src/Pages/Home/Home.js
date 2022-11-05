import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import './Home.scss'
import { FaTwitter } from 'react-icons/fa'
import Loading from '../Loading/Loading'

function Home({ loading, userData }) {
  return loading ? (
    <Loading />
  ) : (
    <div className='home'>
      <div className='main'>
        <Navbar active='home' />
        <div className='hero'>
          <div className='one'>
            <div className='intro'>
              <h1>{userData.name}</h1>
              <p>{userData.bio}</p>
            </div>
          </div>
          <div className='two'>
            <img src={userData.avatar_url} alt='' />
          </div>
          <div className='three'>
            <p>Portfolio</p>
            <a href={`https://${userData.blog}`}>
              <button>
                <h2>Visit my potfolio Link</h2>
              </button>
            </a>
          </div>
        </div>
        <div className='cover-stat'>
          <div className='stats'>
            <div className='card'>
              <p>Location</p>
              <h1>{userData.location}</h1>
            </div>
            <div className='card'>
              <p>Public Repos</p>
              <h1>{userData.public_repos}</h1>
            </div>
            <div className='card'>
              <p>Followers</p>
              <h1>{userData.followers}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
