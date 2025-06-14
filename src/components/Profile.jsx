import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif'
                }}
            >
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '20px 40px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        color: '#333',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Please login to view your profile.
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <div
                style={{
                    backgroundColor: '#ffffff',
                    padding: '30px 40px',
                    borderRadius: '14px',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    color: '#333',
                    width: '90%',
                    maxWidth: '400px'
                }}
            >
                <h2 style={{ fontSize: '26px', marginBottom: '20px' }}>User Profile</h2>
                <p style={{ fontSize: '18px', margin: '10px 0' }}>
                    <strong>Email:</strong> {user.email}
                </p>
                <p style={{ fontSize: '18px', margin: '10px 0' }}>
                    <strong>Password:</strong> {user.password}
                </p>
            </div>
        </div>
    );
}

export default Profile;
