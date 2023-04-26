import React, { useState } from 'react'
import { Form, Link, redirect, useRouteLoaderData } from 'react-router-dom'


export default function CreateUser() {
    const userInfo = useRouteLoaderData("root")
    const [view, setView] = useState(false)
    return (
        <>
            <Form method='post' action='/forms'>
                <label>Username
                <br/>
                <input type="text" name="username" />
                </label>
                <br/>
                <label>Password
                <br/>
                <input type="text" name="password" />
                </label>
                <label>id
                <br/>
                <input type="number" name="id" />
                </label>
                <button>Submit</button>
            </Form>
            <button onClick={() => setView( !view )}>View Edit Form</button>
            {view && 
            <div>
                <ul>
                    {userInfo.map((user, idx)=> {
                        return(
                        <Link key={idx} to={user.username}><li >{user.username}</li></Link>
                    )})}
                </ul>
            </div>}
        </>
    )
}


// action function
// export const userSubmitAction = async ({request}) =>{
//     console.log(request)
    
//     const data = await request.formData()

//     const newData = {
//         username: data.get('username'),
//         password: data.get('password'),
//         id: uuidv4()

//     }
    
//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         body: JSON.stringify(newData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });

//     console.log(`error: ${newData}`)

//     return redirect('/')
// }