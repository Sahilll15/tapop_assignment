import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    // State variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const AuthLogin = async (formdata) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formdata);

            if (response.status === 200) {
                setData(response.data);
                localStorage.setItem('token', response.data.token);
                setLoading(false);
            }

            return true
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
   
    return {
        data,
        loading,
        error,
        AuthLogin
    }
};

export default useAuth;
