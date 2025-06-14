import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md text-center text-black text-xl font-semibold" >
                    Please login to view your profile.
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h2>
                <p className="text-gray-700 text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="text-gray-700 text-lg mt-2"><span className="font-semibold">Password:</span> {user.password}</p>
            </div>
        </div>
    );
}

export default Profile;
