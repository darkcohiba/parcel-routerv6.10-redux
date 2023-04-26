import { useState, useEffect } from 'react';


export default function getUsers(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        async function fetchData(){
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    },[url])
    console.log(data)
    return { loading, data, error };
}



// const response = await fetch('http://localhost:3000/users')
// if (!response.ok) {
//     setError('Failed to fetch!')
// }
// setData(response.json())
// return {data, error}
