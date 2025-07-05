import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
    const { userId, token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/api/reset-password/${userId}/${token}`, {
                newPassword
            });
            alert(response.data.message);
            navigate('/login');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="container mt-5">
            <h3>Reset Password</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
