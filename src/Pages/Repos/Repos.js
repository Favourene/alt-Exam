import React from 'react'
import Navbar from '../../Components/Navbar'
import './Repos.scss'
import RepoImg from '../../images/repo.png'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'
function Repos({
  loading,
  repoList,
  PaginationFunction,
  pageNumber,
  setPageNumber,
}) {
  const navigate = useNavigate()
  return loading ? (
    <Loading />
  ) : (
    <div className='repos'>
      <div className='main'>
        <Navbar active='repos' />
        <div className='repos-body'>
          <div className='top'>
            <h1>Repositories</h1>
          </div>
          <div className='wrap'>
            {repoList.map((item) => (
              <div
                className='card'
                key={item.id}
                onClick={() => navigate(`/repos/${item.id}`)}
              >
                <h2>{item.name}</h2>
                <p>{item.full_name}</p>
                <div className='lang'>
                  <h4>{item.language}</h4>
                </div>
                <div className='img'>
                  <img src={RepoImg} alt='' />
                </div>
              </div>
            ))}
          </div>
          <div className='pagination'>
            <div className='pagilist'>
              <ul>
                <li
                  onClick={() => {
                    if (pageNumber > 1) {
                      PaginationFunction(pageNumber - 1)
                      setPageNumber(pageNumber - 1)
                    }
                  }}
                  className={pageNumber <= 1 ? 'deactive' : ''}
                >
                  prev
                </li>
                <li
                  className={pageNumber === 1 ? 'active' : ''}
                  onClick={() => {
                    PaginationFunction(1)
                    setPageNumber(1)
                    sessionStorage.setItem('pageNum', 1)
                  }}
                >
                  1
                </li>
                <li
                  className={pageNumber === 2 ? 'active' : ''}
                  onClick={() => {
                    PaginationFunction(2)
                    setPageNumber(2)
                    sessionStorage.setItem('pageNum', 2)
                  }}
                >
                  2
                </li>
                <li
                  onClick={() => {
                    PaginationFunction(3)
                    setPageNumber(3)
                    sessionStorage.setItem('pageNum', 3)
                  }}
                  className={pageNumber === 3 ? 'active' : ''}
                >
                  3
                </li>
                <li
                  onClick={() => {
                    PaginationFunction(4)
                    setPageNumber(4)
                  }}
                  className={pageNumber === 4 ? 'active' : ''}
                >
                  4
                </li>
                <li
                  onClick={() => {
                    if (pageNumber < 4) {
                      PaginationFunction(pageNumber + 1)
                      setPageNumber(pageNumber + 1)
                    }
                  }}
                  className={pageNumber >= 4 ? 'deactive' : ''}
                >
                  next
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repos
