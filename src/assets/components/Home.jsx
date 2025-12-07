import axios from 'axios'
import React, { useEffect } from 'react'

function Home() {
    const getUsers = async () => {
        try {
            const res = await axios.get("https://openuser.onrender.com/api/user")
            console.log(res.data)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Home