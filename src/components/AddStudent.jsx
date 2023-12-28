import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/tp1/students', { name, city })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('Il y avait une erreur!', error);
            });
    };

    return (
        <form className='add-student' onSubmit={handleSubmit}>
            <h2>Ajouter un Étudiant</h2>
            <label>
                Nom:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Ville:
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            </label>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddStudent;
