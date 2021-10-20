import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
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

    // create new user
    const hendelRegistration = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must at list 6 Character !!')
            return;
        }
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                verifyEmail()
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // Log in section
    const processLogIn = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must at list 6 Character !!')
            return;
        }
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    }
    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    // user mail verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }
    // User Password reset

    const hendelResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    // Google sing in
    const googleLogIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // user state change 

    useEffect(() => {
        onAuthStateChanged(auth, users => {
            if (users) {
                setUsers(users)
            }
            else {
                setUsers({})
            }
            setIsLoading(false)
        })
    }, [])

    // Sign out
    const hendelSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => {
                setUsers({})
            })
            .finally(() => setIsLoading(false))
    }

    return { hendelEmailChange, hendelPasswordChange, processLogIn, hendelRegistration, hendelResetPassword, hendelNameChange, error, googleLogIn, hendelSignOut, users, isLoading }

}
export default useFirebase;