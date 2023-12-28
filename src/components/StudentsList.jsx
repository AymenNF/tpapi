import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentsList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tp1/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Il y a eu un problème avec la requête Axios', error);
            });
    }, []);

    return (
        <div>
            <h2>Liste des Étudiants</h2>
            <ul className='student-list'>
                {students.map(student => (
                    <li key={student.id}>{student.name} - {student.city}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
