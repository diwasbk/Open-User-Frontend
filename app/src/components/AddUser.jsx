import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../config.js";

function AddUser({ getUsers }) {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [showSubmit, setShowSubmit] = useState(true)

    const handleSubmit = async () => {
        try {
            const data = {
                id: userId,
                username: userName,
                email: email,
                name: name,
                age: age,
                address: address
            }
            const res = await axios.post(`${BASE_URL}/post`, data)
            console.log(res.data)
            toast.success(res.data.message)
            setShowSubmit(false)
            getUsers()

        } catch (err) {
            console.log(err.response.data)
            toast.error(err.response.data.message)
        }
    }
    return (
        <>
            {showSubmit && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                    <div className="mx-auto  bg-gray-100 shadow-md rounded-2xl p-8">
                        <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
                            ADD NEW USER
                        </h1>

                        {/* ID */}
                        <div className="mb-4">
                            <label htmlFor="userId" className="block text-gray-600 font-medium mb-1">
                                ID
                            </label>
                            <input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder="e.g. 123"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. John Doe"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Username */}
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-gray-600 font-medium mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="e.g. johndoe123"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Age */}
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-600 font-medium mb-1">
                                Age
                            </label>
                            <input
                                type="text"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="e.g. 18"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. johndoe@gmail.com"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-600 font-medium mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="e.g. Kathmandu, Nepal"
                                required
                                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-3 hover:bg-blue-500 transition cursor-pointer">
                            Add User
                        </button>
                        
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={()=>{setShowSubmit(false)}}
                            className="w-full bg-gray-800 text-white font-semibold py-2.5 rounded-lg mt-3 hover:bg-gray-700 transition cursor-pointer">
                            Close
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}

export default AddUser;
