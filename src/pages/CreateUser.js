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