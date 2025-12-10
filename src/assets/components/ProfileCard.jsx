import axios from 'axios'
import React, { useState } from 'react'
import UpdateUser from './UpdateUser'

function ProfileCard({ users, setUsers }) {

    const [showUpdate, setShowUpdate] = useState(false)
    const [selectedUser, setSelectedUser] = useState([])

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://openuser.onrender.com/api/user/delete/${id}`)
            console.log(res.data)
            if (res.status == 200) {
                const updatedUser = users.filter((user) => {
                    return user.id != id
                })
                alert(res.data.message)
                setUsers(updatedUser)
            }
        } catch (err) {
            console.log(err.response.message)
            alert(err.response.data.message)
        }
    }

    const handleEditClick = (user) => {
        setSelectedUser(user)
        setShowUpdate(true)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                OPEN USER PROFILE
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                    >
                        <div className="mb-4">
                            <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
                        </div>

                        <div className="space-y-2 text-gray-700 mb-4">
                            <p><span className="font-medium text-gray-600">ID:</span> {user.id}</p>
                            <p><span className="font-medium text-gray-600">Username:</span> {user.username}</p>
                            <p><span className="font-medium text-gray-600">Age:</span> {user.age}</p>
                            <p><span className="font-medium text-gray-600">Email:</span> {user.email}</p>
                            <p><span className="font-medium text-gray-600">Address:</span> {user.address}</p>
                        </div>

                        {/* Update User */}
                        <div className='mt-5 mb-5'>
                            {showUpdate && selectedUser && selectedUser.id === user.id && (
                                <UpdateUser selectedUser={selectedUser} onClose={() => setShowUpdate(false)} setUsers={setUsers} users={users}/>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
                                onClick={() => { handleEditClick(user); }}>
                                Edit
                            </button>

                            <button
                                className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition cursor-pointer"
                                onClick={() => { handleDelete(user.id) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ProfileCard