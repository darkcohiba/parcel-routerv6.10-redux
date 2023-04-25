import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    console.log("About Page")
  return (
    <>
        <div>About</div>
        <br/>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/userform">Form</Link>
    </>
  )
}
