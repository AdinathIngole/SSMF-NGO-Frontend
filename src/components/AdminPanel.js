import React, { useEffect, useState } from 'react';
import '../css/AdminPanel.css';
import axios from '../axiosURLConfig';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

    const [data, setData] = useState('');
    const navigate = useNavigate
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/admin/adminDashboard');
                setData(response.data);
            } catch (error) {
                console.log('Error fetching admin dashboard', error);
                if (error.response.status === 401) {
                    navigate('/adminLogin');
                }
            }
        };

        fetchData();
    }, [navigate]);
  
    return (
        <>
        <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <p>{data}</p>
      </div>
        </>
    );
}

export default AdminPanel;