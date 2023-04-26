import React from 'react'
import { Form, useRouteLoaderData, useParams } from 'react-router-dom'

export default function EditUser() {
    const userInfo = useRouteLoaderData("root")
    const { id } = useParams()
    console.log(id)
    console.log(userInfo)
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
    </>
  )
}
