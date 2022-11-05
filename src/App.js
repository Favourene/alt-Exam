import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Error from './Pages/Error/Error'
import Home from './Pages/Home/Home'
import Repos from './Pages/Repos/Repos'
import SingleRepo from './Pages/SingleRepo/SingleRepo'
function App() {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({})
  const [repoList, setRepoList] = useState([])
  const [repoLoading, setrepoLoading] = useState(true)
  //so  by default i set my page number to what ever is in the session storage
  //since my page number now beig fetched from the session storage is a string, and the system i already built works with a number, i had to use parseInt to convert the string to a number. P.S:- This is because i'm too lazy to start changing everything, and the deadlin is close.
  const [pageNumber, setPageNumber] = useState(
    parseInt(sessionStorage.getItem('pageNum'))
  )
  useEffect(() => {
    fetch('https://api.github.com/users/favourene')
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setUserData(data)
            setLoading(false)
            console.log(new Date(1667617089 * 1000))
          })
        } else {
          res.json().then((data) => {
            console.log(data)
          })
          console.log('an error occured')
        }
      })
      .catch(() => {
        console.log('Unable to conect, check internet connection')
      })
    //since the default page number is 1 and there are 96 repos, i was facing a bug whenever i refresh my single repo page, if the selected repo is in page 2, i get an error finding it. to fix this, i had to store the page number in a session storage, so that for every refresh, it stays on the same page and not go back to default.
    fetch(`https://api.github.com/users/favourene/repos?page=${pageNumber}`)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setRepoList(data)
            setrepoLoading(false)
            console.log(data)
            if (sessionStorage.getItem('pageNum') === null) {
              sessionStorage.setItem('pageNum', 1)
            }
          })
        } else {
          console.log('an error occured')
        }
      })
      .catch(() => {
        console.log('Unable to conect, check internet connection')
      })
  }, [])
  const PaginationFunction = (pageNum) => {
    setrepoLoading(true)
    fetch(`https://api.github.com/users/favourene/repos?page=${pageNum}`)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setRepoList(data)
            setrepoLoading(false)
          })
        } else {
          console.log('an error occured')
          setrepoLoading(false)
        }
      })
      .catch(() => {
        console.log('Unable to conect, check internet connection')
      })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home loading={loading} userData={userData} />}
        />
        <Route
          path='/repos'
          element={
            <Repos
              loading={repoLoading}
              repoList={repoList}
              PaginationFunction={PaginationFunction}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
          }
        />
        <Route
          path='/repos/:id'
          element={<SingleRepo loading={repoLoading} repoList={repoList} />}
        />

        <Route
          path='*'
          element={<Error loading={repoLoading} repoList={repoList} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
