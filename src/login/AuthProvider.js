import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [token, setToken] = useState( localStorage.getItem('token')  || null);

    const updateUserAndToken = (newUser, newToken) => {
        setUser(newUser);
        setToken(newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('token', newToken);
    };

    return (
        <AuthContext.Provider value={{ user, token, updateUserAndToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
