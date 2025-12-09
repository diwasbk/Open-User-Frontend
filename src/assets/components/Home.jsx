/* eslint-disable react-hooks/set-state-in-effect */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import AddUser from './AddUser'

function Home() {
    const [users, setUsers] = useState([])
    const [showAddUser, setShowAddUser] = useState(false)

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
            <div className='flex justify-end p-6 bg-gray-100'>
                <button
                    onClick={() => setShowAddUser(prev => !prev)}
                    className="w-[200px] p-2 font-bold text-white rounded cursor-pointer flex justify-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-colors duration-300">
                    Add New User
                </button>

            </div>
            {showAddUser && <AddUser getUsers={getUsers} />}
            <ProfileCard users={users} setUsers={setUsers} />
        </div>
    )
}

export default Home