import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

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
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscrube = onAuthStateChanged(auth, user=>{
            setUser(user)
            

            if(user){
                axios.post(`https://camp-wise-server.vercel.app/jwt`, {email: user.email})
                .then(res=>{
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('token')
                setLoading(false)
            }
        })

        return ()=>{
            return unsubscrube();
        }
    },[])



    const authInfo = {
        user,
        loading,
        setLoading,
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