import React, { useEffect, useState } from 'react';
import axios from '../axiosURLConfig';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        axios.get('/volunteers')
            .then(response => {
                setVolunteers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the volunteers data!', error);
            });
    }, []);

    const downloadAdhar = (id, fullName) => {
        axios.get(`/volunteers/${id}/adhar`, { responseType: 'blob' })
            .then(response => {
                const contentType = response.headers['content-type'];
                const extension = getExtension(contentType);
                const url = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));
                const a = document.createElement('a');
                a.href = url;
                a.download = `${fullName}_adhar.${extension}`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error('There was an error downloading the Adhar!', error);
            });
    };

    const getExtension = (contentType) => {
        switch (contentType) {
            case 'application/pdf':
                return 'pdf';
            case 'image/jpeg':
                return 'jpg';
            default:
                return 'bin';
        }
    };

    return (
        <div>
            <h1>Volunteers List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>DOB</th>
                        <th>Qualification</th>
                        <th>Blood Group</th>
                        <th>Adhar</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(volunteer => (
                        <tr key={volunteer.id}>
                            <td>{volunteer.fullName}</td>
                            <td>{volunteer.mobileNo}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.address}</td>
                            <td>{volunteer.city}</td>
                            <td>{volunteer.state}</td>
                            <td>{volunteer.dob}</td>
                            <td>{volunteer.qualification}</td>
                            <td>{volunteer.bloodGroup}</td>
                            <td>
                                <button onClick={() => downloadAdhar(volunteer.id, volunteer.fullName)}>Download Adhar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerList;
