import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
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

// export const AdminProtectedRoutes = ({ children }) => {
//     const auth = useSelector((state) => state.auth.authvalue);
//     console.log('dshjh',auth)

//     const user = useSelector((state) => state.auth.users);
//     console.log(user.usertype);
//     const [redirectPath, setRedirectPath] = useState('');

//     useEffect(() => {
//         if (!auth || user?.usertype !== 'admin') {
//             setRedirectPath('/');
//         }
//     }, [auth, user]);

//     if (redirectPath) {
//         return <Navigate to={redirectPath} replace />;
//     }

//     return children;
// };
// export const AdminProtectedRoutes = ({ children }) => {
//     const auth = useSelector((state) => state.auth.authvalue); // correct key from your store
//     const user = useSelector((state) => state.auth.users);     // correct key from your store
//     const [isChecking, setIsChecking] = useState(true);        // to handle loading phase
//     const [redirectPath, setRedirectPath] = useState('');

//     useEffect(() => {
//         if (auth === undefined || user === undefined) return;

//         // Wait until auth and user are available
//         if (!auth || user.usertype !== 'admin') {
//             setRedirectPath('/');
//         }

//         setIsChecking(false);
//     }, [auth, user]);

//     if (isChecking) {
//         return <div>Loading...</div>; // prevent premature redirect
//     }

//     if (redirectPath) {
//         return <Navigate to={redirectPath} replace />;
//     }

//     return (
//         <>
//             {children}
//         </>
//     )
// };

export const AdminProtectedRoutes = ({ children }) => {

    const auth = useSelector((state) => state.auth.authvalue); // correct key from your store
    const user = useSelector((state) => state.auth.users);
    console.log(auth)
    const [redirectpath, setredirectpath] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        // If not authenticated or not an admin, redirect home
        if (!auth || user.usertype !== "admin") {
            navigate("/", { replace: true });
        }
    }, [auth, user]);

    return <>{children}</>;
};




