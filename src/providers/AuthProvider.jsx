import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
 
// const auth = getAuth(app);


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
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}