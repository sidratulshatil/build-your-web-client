import React, { useState } from 'react';
import { createContext } from "react"
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const authInfo = { user, createUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;