import React from 'react'
import { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getUsers } from '../utils/fetches'
import { useState } from 'react'
import TableRows from '../components/TableRows'


export default function Home() {
  // const [userInfo, setUserInfo] = useState([])
  const [errorCurrent, setErrorCurrent] = useState("")
  const userInfo = useLoaderData()


  // useEffect(()=>{
  //   getUsers().then(data => setUserInfo(data)).catch(err => setErrorCurrent(err))
  //   console.log("in the use effect")
  // },[])

  const userRows = userInfo.map((user, idx) =>(
    <TableRows 
      key={idx}
      user={user}
    />
  ))

  if (errorCurrent){
    return(
      <>
      <div>Home</div>

      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/userform">Form</Link>
      </>
    )
  }
  return (
    <>
        <div>Home</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>  
            <tbody>
              {userRows}
            </tbody>
          </table>
        </div>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/userform">Form</Link>
    </>

  )
}
