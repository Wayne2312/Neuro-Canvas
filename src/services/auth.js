import {
    auth,
    googleProvider,
    db,
    timestamp
} from '../lib/firebase.js';
import {
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import{ doc,
    setDoc,
    updateDoc,
    getDoc,
} from 'firebase/firestore';

export const loginWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        await setDoc(doc(db, "users", result.user.uid),{
            uid : result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            lastLogin: timestamp(),
        });
        return result.user;
    } catch (err){
        console.error("Error logging in with Google: ", err);
        throw err;
    }
};

export const emailPasswordLogin = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user
    }catch(err){
        console.log("Email login failed", err);
        throw err
    }
};

export const registerWithEmail = async (email, password, username) => {
    try{
        const userCredential= await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid),{
            uid: userCredential.user.uid,
            displayName: username,
            email: email,
            createdAt: timestamp()
        });
        return userCredential.user;
    } catch (err) {
        console.error("Registration failed:", err);
        throw err;
    }
};

export const logout = async() => {
    await signOut(auth);
};