import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function About() {


  const users = useSelector((state) => state.users);
  console.log(users)
  return (
    <>
        <div className='titles'>About Page</div>
    </>
  )
}
