import React from 'react'
import { Form, Link, redirect } from 'react-router-dom'

export default function CreateUser() {
    return (
        <>
            <Form method='post' action='/userform'>
                <label>Username
                <br/>
                <input type="text" name="username" />
                </label>
                <br/>
                <label>Password
                <br/>
                <input type="text" name="password" />
                </label>
                <button>Submit</button>
            </Form>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
        </>
    )
}


// action function
export const userSubmitAction = async ({request}) =>{
    console.log(request)
    
    const data = await request.formData()

    const newData = {
        username: data.get('username'),
        password: data.get('password')
    }

    console.log(newData)

    return redirect('/')
}