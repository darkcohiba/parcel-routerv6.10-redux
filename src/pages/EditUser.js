import React from 'react'
import { Form, useRouteLoaderData, useParams } from 'react-router-dom'

export default function EditUser() {
    const userInfo = useRouteLoaderData("root")
    const { userName } = useParams()
    console.log(userName)
    console.log(userInfo)
  return (
    <>
        <Form method='post' action='/forms/:username'>
            <label>Update Password
            <br/>
            <input type="text" name="password" />
            </label>
            <button>Submit</button>
        </Form>
    </>
  )
}
