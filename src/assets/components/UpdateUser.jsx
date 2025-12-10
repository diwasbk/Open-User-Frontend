/* eslint-disable react-hooks/set-state-in-effect */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UpdateUser({ selectedUser, onClose, setUsers, users }) {

    const [updateName, setUpdateName] = useState("")
    const [updateUserName, setUpdateUserName] = useState("")
    const [updateAge, setUpdateAge] = useState("")
    const [updateEmail, setUpdateEmail] = useState("")
    const [updateAddress, setUpdateAddress] = useState("")

    useEffect(() => {
        if (selectedUser) {
            setUpdateName(selectedUser.name),
            setUpdateUserName(selectedUser.username),
            setUpdateAge(selectedUser.age),
            setUpdateEmail(selectedUser.email),
            setUpdateAddress(selectedUser.address)
        }
    }, [selectedUser])

    const handleUpdate = async (id) => {
        try {
            const data = {
                name: updateName,
                username: updateUserName,
                age: updateAge,
                email: updateEmail,
                address: updateAddress
            }
            const res = await axios.put(`https://openuser.onrender.com/api/user/update/${id}`, data)
            console.log(res.data)

            // Update the local user state to reflect the changes in the UI
            // Only the user with matching id is updated, others stay the same
            const updatedUser = users.map(user =>
                user.id === id ? { ...user, ...data } : user
            );
            setUsers(updatedUser);

            // Close the form
            onClose()
            alert(res.data.message)

        } catch (err) {
            console.log(err.response.data)
            alert(err.response.data.message)
        }
    }
    
    return (
        <>
            <div className="mx-auto  bg-gray-100 shadow-md rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
                    UPDATE INFO
                </h1>

                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="updateName" className="block text-gray-600 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="updateName"
                        value={updateName}
                        onChange={(e) => { setUpdateName(e.target.value) }}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="updateUserName" className="block text-gray-600 font-medium mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="updateUserName"
                        value={updateUserName}
                        onChange={(e) => { setUpdateUserName(e.target.value) }}
                        placeholder="e.g. johndoe123"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="updateAge" className="block text-gray-600 font-medium mb-1">
                        Age
                    </label>
                    <input
                        type="text"
                        id="updateAge"
                        value={updateAge}
                        onChange={(e) => { setUpdateAge(e.target.value) }}
                        placeholder="e.g. 18"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="updateEmail" className="block text-gray-600 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="updateEmail"
                        value={updateEmail}
                        onChange={(e) => { setUpdateEmail(e.target.value) }}
                        placeholder="e.g. johndoe@gmail.com"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="updateAddress" className="block text-gray-600 font-medium mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        id="updateAddress"
                        value={updateAddress}
                        onChange={(e) => { setUpdateAddress(e.target.value) }}
                        placeholder="e.g. Kathmandu, Nepal"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    onClick={() => { handleUpdate(selectedUser.id) }}
                    className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg mt-3 hover:bg-green-500 transition cursor-pointer">
                    Update
                </button>

                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="w-full bg-gray-800 text-white font-semibold py-2.5 rounded-lg mt-3 hover:bg-gray-700 transition cursor-pointer">
                    Close
                </button>
            </div>
        </>
    )
}

export default UpdateUser