import React, { useEffect, useState } from 'react';
import { auth, googleAuthProvider, facebookAuthProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "antd";

const LoginGoogleAndFacebook = () => {
    const [value, setValue] = useState("");

    const handleGoogleClick = () => {
        googleAuthProvider.setCustomParameters({ prompt: 'select_account'})
        signInWithPopup(auth, googleAuthProvider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
            })
            .catch(error => {
                console.error("Google sign-in error:", error);
            });
    }

    const handleFacebookClick = () => {
        facebookAuthProvider.setCustomParameters({ auth_type: 'reauthenticate'})
        signInWithPopup(auth, facebookAuthProvider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
            })
            .catch(error => {
                console.error("Facebook sign-in error:", error);
            });
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    }, []);

    return (
        <div className={"text-lg-center"}>
            <Button style={{backgroundColor:'#7FAD39', color:"white", width:150, height:40, fontSize:15}} onClick={handleGoogleClick}>
                <i style={{fontSize:25,paddingRight:5}} className="fa fa-google-plus"></i>&nbsp;&nbsp;Google</Button> &nbsp;
            <Button style={{backgroundColor:'#7FAD39', color:"white", width:150, height:40, fontSize:15}} onClick={handleFacebookClick}>
                <i style={{fontSize:25,paddingRight:5}} className="fa fa-facebook-f"></i>&nbsp;&nbsp;Facebook</Button>
        </div>
    );
};

export default LoginGoogleAndFacebook;

