import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [users, setUsers] = useState({})
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const hendelNameChange = (event) => {
        setName(event.target.value)
    }
    const hendelEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const hendelPasswordChange = event => {
        setPassword(event.target.value)
    }
    const hendelRegistration = (e) => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password must at list 6 Character !!')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                verifyEmail()
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const processLogIn = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must at list 6 Character !!')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }
    const hendelResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }
    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const hendelSignOut = () => {
        signOut(auth)
            .then(result => {
                setUsers({})
            })
    }

    return { hendelEmailChange, hendelPasswordChange, processLogIn, hendelRegistration, hendelResetPassword, hendelNameChange, error, googleLogIn, hendelSignOut, users }

}
export default useFirebase;