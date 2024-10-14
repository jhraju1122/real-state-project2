// import { createContext, useEffect, useState} from 'react';
// import PropTypes from 'prop-types'; 
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
// // import auth from '../../firebase/firebase.config';
 



// export const AuthContext = createContext(null); // 1,  create AuthContext

// const googleProvider = new GoogleAuthProvider();


// const Authprovider = ({children}) => {
 
// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(true);

// const createUser = (email, password) =>{
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
// }


// const signInUser = (email, password) =>{
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password)
// }

// const signInWithGoogle = () =>{
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
// }



// const logOut = () =>{
//  return signOut(auth);
// }



//        useEffect(() =>{
//         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//             console.log('observing current user inside useEffect of AuthProvider ', currentUser);
//             setLoading(false);
//         })

//         return () =>{
//           unSubscribe()
//         }
//        }, [])

//     const authInfo = { 
//         user,
//         loading,
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         logOut
//     }

//     return (
//          <AuthContext.Provider value={authInfo}> 
       
//             {children}
            

//         </AuthContext.Provider>
//     );
// };

// export default Authprovider;
 
// Authprovider.PropTypes = {
//     children: PropTypes.node
// }