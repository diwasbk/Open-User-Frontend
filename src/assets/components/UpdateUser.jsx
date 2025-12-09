import React from 'react'

function UpdateUser() {
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
                        placeholder="e.g. Kathmandu, Nepal"
                        required
                        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg mt-3 hover:bg-green-500 transition cursor-pointer">
                    Update
                </button>
            </div>
        </>
    )
}

export default UpdateUser