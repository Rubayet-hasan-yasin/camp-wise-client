import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const registerWithEmailAndPassword = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmailAndPassword = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscrube = onAuthStateChanged(auth, user=>{
            setUser(user)
            setLoading(false);
        })

        return ()=>{
            return unsubscrube();
        }
    },[])



    const authInfo = {
        user,
        loading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        googleSignIn,
        logOut

    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;