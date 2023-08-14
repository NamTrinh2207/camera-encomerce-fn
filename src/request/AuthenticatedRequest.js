import React from 'react';
import {useAuth} from "../login/AuthProvider";
import axios from "axios";

function AuthenticatedRequest(url, method, data) {
    const {token} = useAuth();

    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return axios({
        method,
        url,
        data,
        headers,
    });
}

export default AuthenticatedRequest;

// Sử dụng hàm AuthenticatedRequest trong các nơi cần gửi request.