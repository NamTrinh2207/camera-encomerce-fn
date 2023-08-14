import React from 'react';
import {AuthProvider} from "./AuthProvider";
import App from "../App";

function Root() {
    return (
        <AuthProvider>
           <App/>
        </AuthProvider>
    );
}

export default Root;

