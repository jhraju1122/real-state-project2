import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() =>{
        onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser)
        })
    }, [])

    const authInfo = {
        user, 
        createUser
    }


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;