import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import './SingleRepo.scss'
import Loading from '../Loading/Loading'

function SingleRepo({ repoList }) {
  const [repoPage, setRepoPage] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  useEffect(() => {
    const selectedRepo = repoList.find((item) => item.id === parseInt(id))
    setRepoPage(selectedRepo)
    if (repoList.length > 1) {
      setLoading(false)
    }
    console.log(selectedRepo)
  }, [repoList])

  return loading ? (
    <Loading />
  ) : (
    <div className='singleRepo'>
      <div className='main'>
        <Navbar active='repos' />
        <div className='repo_body'>
          <div className='top'>
            <h1>{repoPage.name}</h1>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>{repoPage.full_name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Language</th>
                  <th>{repoPage.language}</th>
                </tr>
                <tr>
                  <th>Visibility</th>
                  <th>{repoPage.visibility}</th>
                </tr>
                <tr>
                  <td>Url</td>
                  <td>{repoPage.html_url}</td>
                </tr>
                <tr>
                  <td>Default branch</td>
                  <td>{repoPage.default_branch}</td>
                </tr>
                <tr>
                  <td>Date created</td>
                  <td>{repoPage.pushed_at}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRepo
