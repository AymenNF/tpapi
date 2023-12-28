import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentsList.css'

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tp1/students?page=${currentPage}&size=${pageSize}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Il y a eu un problème avec la requête Axios', error);
            });
    }, [currentPage, pageSize]);

    return (
        <div>
            <h2>Liste des Étudiants</h2>
            <ul className='student-list'>
                {students.map(student => (
                    <li key={student.id}>{student.name} - {student.city}</li>
                ))}
            </ul>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>Précédent</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Suivant</button>
            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
    );
};

export default StudentsList;
