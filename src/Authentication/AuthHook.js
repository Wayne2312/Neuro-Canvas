import { useState, useEffect } from "react";
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthHook(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) =>{
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    return { user, loading };
};
/*need more time to intergrate hence not used*/