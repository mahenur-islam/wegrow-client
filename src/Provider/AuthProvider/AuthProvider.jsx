/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //sign in 
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password)
    }

    //google sign in 
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //log out

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    //update user profile 
    const updateUserProfile = (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photoURL
        })
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
        })

        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;