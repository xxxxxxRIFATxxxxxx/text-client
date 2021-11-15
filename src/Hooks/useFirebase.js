import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    getIdToken,
} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

// Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [idToken, setIdToken] = useState("");
    const auth = getAuth();

    const loginWithGoogle = (history, location) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setErrorMessage("");

                const user = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                };

                fetch("https://pure-brushlands-94522.herokuapp.com/users", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            const redirect_uri = location?.state?.from || "/";
                            history.push(redirect_uri);
                        };
                    });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });

    };

    const loginWithEmail = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setErrorMessage("");
                const redirect_uri = location?.state?.from || "/dashboard";
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signUpWithEmail = (email, password, displayName, history, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = {
                    email: user.email,
                    displayName: displayName
                };

                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                    setUser(newUser);
                    setErrorMessage("");
                }).catch((error) => {
                    setErrorMessage(error.message);
                });

                fetch("https://pure-brushlands-94522.herokuapp.com/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            const redirect_uri = location?.state?.from || "/";
                            history.push(redirect_uri);
                        };
                    });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Observer User State
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setIdToken(idToken);
                    });
            }
            else {
                setUser({});
            };

            setIsLoading(false);
        });

        return () => unsubscribed;
    }, []);

    const logout = (history) => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setErrorMessage("");
                history.push("/login");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // Check User Role
    useEffect(() => {
        fetch(`https://pure-brushlands-94522.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [user.email])

    return {
        user,
        loginWithGoogle,
        loginWithEmail,
        signUpWithEmail,
        logout,
        errorMessage,
        isLoading,
        idToken,
        isAdmin
    };
};

export default useFirebase;