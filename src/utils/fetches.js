import { redirect } from 'react-router-dom';

// post users
export const userSubmitAction = async ({request}) =>{
    console.log(request)
    
    const data = await request.formData()

    const newData = {
        username: data.get('username'),
        password: data.get('password'),
        id: data.get('id')

    }
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // console.log(`error: ${newData}`)

    
    return redirect('/')
}

// patch users
export const userUpdatePassword = async ({ request }) =>{
    
    const data = await request.formData()
    const id = data.get('id')

    const newData = {
        password: data.get('password'),
    }
    console.log(newData)
    console.log(id)
    
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(newData),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // console.log(`error: ${newData}`)

    
    return redirect('/forms')
}