export async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    if (!response.ok) {
        throw new Error('Failed to fetch!')
    }
    return response.json()
}