import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'

function Home() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const res = await axios.get("https://openuser.onrender.com/api/user")
            console.log(res.data)
            setUsers(res.data.result)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <ProfileCard users={users} />
        </div>
    )
}

export default Home