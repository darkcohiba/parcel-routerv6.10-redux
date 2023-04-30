export async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    if (!response.ok) {
        throw new Error('Failed to fetch!')
    }
    return response.json()
}

export async function getUsersJsoned() {
    let result;
    const response = await fetch('http://localhost:3000/users')
    if (!response.ok) {
        throw new Error('Failed to fetch!')
    }
    response.json().then(data =>{
        result = data
    })
    return result
}