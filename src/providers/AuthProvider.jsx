// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
// import React, { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import app from '../firebase/firebase.config';
// import auth from '../firebase/firebase.config';


// export const AuthContext = createContext(null);
 
// // const auth = getAuth(app);


// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);

//     const createUser = (email , password) =>{
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
     
//       //    observe auth state change
//     useEffect(() =>{
//       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//             console.log('user in the auth state changed', currentUser);
//             setUser(currentUser)
//         })
           
//         return () =>{
//             unSubscribe();
//         }
//     }, [])

      
//       const signInUser = (email, password) =>{
//        return signInWithEmailAndPassword(auth, email, password)
//       }
 
  

//     const authInfo = {
//         user, 
//         createUser,
//         signInUser
//     }


//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// AuthProvider.PropTypes = {
//     children: PropTypes.node
// }