import React from 'react';
import {useAuth} from "./AuthProvider";
import {useNavigate} from "react-router-dom";

function Logout(props) {
    const {updateUserAndToken} =useAuth();
    const navigate = useNavigate();
    updateUserAndToken(null,null)
    navigate("/")
}
export default Logout;