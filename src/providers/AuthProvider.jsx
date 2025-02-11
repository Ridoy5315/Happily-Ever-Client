import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     const axiosPublic = useAxiosPublic();

     //create a new user
     const createUser = (email, password)=> {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // update the user information after create the user
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
          })
     }

     //sign in user
     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     //sign in with google
     const googleSignIn = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
     } 

     //log out user
     const logOut = () => {
          setLoading(true);
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               if(currentUser){
                    //get token and store client
                    const userInfo = {email: currentUser?.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                         if(res.data.token){
                              localStorage.setItem('access-token', res.data.token);
                              setLoading(false);
                         }
                    })
               }
               else{
                    //remove token because of current user unavailable
                    localStorage.removeItem('access-token');
                    setLoading(false);
               }
               
          });
          return () => {
               return unsubscribe();
          }
     }, [axiosPublic])

     const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          googleSignIn,
          updateUserProfile,
          logOut
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;