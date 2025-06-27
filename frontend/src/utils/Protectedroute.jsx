import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { showToast } from '../Store/slice/ToastSlice';

export const Protectedroute = ({ children }) => {

    const token = localStorage.getItem('token');
    const [redirectpath, setRedirectPath] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        if (!token) {
            dispatch(showToast({ message: 'Please Sign Up or Login', type: "error" })),
                setRedirectPath('/')
        }
    }, [token])

    if (redirectpath) return <Navigate to='/'></Navigate>
    return (
        <>{children}</>
    )

}

export const AdminProtectedRoutes = ({ children }) => {
    
    const auth = useSelector((state) => state.auth.auth);
    const user = useSelector((state) => state.auth.user);
    const [redirectpath, setredirectpath] = useState('')

    useEffect(() => {
        if (!auth) {
            setredirectpath('/');
        }
        else if (user.usertype !== 'admin') {
            setredirectpath('/');
        }
    }, [auth, user]);

    if (redirectpath) return <Navigate to='/' replace></Navigate>

    return (
        <>
            {children}
        </>
    )
}
