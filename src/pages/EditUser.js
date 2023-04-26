import React from 'react'
import { Form, useRouteLoaderData, useParams } from 'react-router-dom'

export default function EditUser() {
    const userInfo = useRouteLoaderData("root")
    const { username } = useParams()
    console.log(username)
    const currentUser = userInfo.find(user => user.username === username)
    console.log(currentUser)
  return (
    <>
        <Form method='post' action='/forms/:username'>
            <label>Update Password
            <br/>
            <input type="text" name="password" />
            </label>
            <label>
            <br/>
            <input type="number" value={currentUser.id} hidden readOnly name="id" />
            </label>
            <button>Submit</button>
        </Form>
    </>
  )
}
