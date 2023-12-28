import React from 'react';
import StudentsList from './components/StudentsList';
import AddStudent from './components/AddStudent';

const App = () => {
  return (
    <div>
      <h1>Gestion des Étudiants</h1>
      <AddStudent />
      <StudentsList />
    </div>
  );
}

export default App;
