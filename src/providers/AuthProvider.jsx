// import React, { Children, createContext, useEffect, useState } from 'react';
// import auth from '../firebase/firebase.config';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import PropTypes from 'prop-types';

// export const AuthContext = createContext(null)
// const AuthProvider = ({Children}) => {
//     const  [user, setUser] = useState(null);
//     const [loader, setLoader] = useState(true)
//     // create user
//     const createUser =(email, password)=>{
//      return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // mannage user
//     useEffect(() => {
//         const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//             setLoader(false)
//         });
//         return () => {
//           unSubscriber();
//         };
//       }, []);

//     // sign in  user
//     const logInUser = (email, password) =>{
//         setLoader(true)
//         return  signInWithEmailAndPassword(auth,email, password)
//     }

//    //    logOut User
//   const logOut = () => {
//     setLoader(true);
//     return signOut(auth);
//   };

//     const authInfo = {
//        createUser,
//        logInUser,
//        user,
//        logOut,
//        loader

//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {Children}
//         </AuthContext.Provider>
//     );
// };
// AuthProvider.propTypes = {
//   Children:PropTypes.node,
// }
// export default AuthProvider;