import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div>Home</div>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/userform">Form</Link>
    </>

  )
}
