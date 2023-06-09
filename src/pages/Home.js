import React from 'react'
import { useEffect } from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom'
import { getUsers } from '../utils/fetches'
import { useState } from 'react'
import TableRows from '../components/TableRows'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



export default function Home() {
  // const [userInfo, setUserInfo] = useState([])
  const [errorCurrent, setErrorCurrent] = useState("")
  const userInfo = useRouteLoaderData("root")
  const dispatch = useDispatch();

  const createUsers = userInfo => {
    userInfo.forEach(user => {
      // console.log(user)
      dispatch(addUser(user))

    });
  }
  // createUsers(userInfo)



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
      </>
    )
  }
  return (
    <>
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
    </>

  )
}
