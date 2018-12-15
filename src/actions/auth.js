import { firebase, googleAuthProvider } from '../firebase/firebase'

export const startLogin = () => {
    return () => {
        // This has the affect of having a google authentication popup
        return firebase.auth().signInWithPopup(googleAuthProvider)
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}