import React, { useState } from 'react';
import axios from 'axios';

const CreateData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { name, email };
    axios.post('http://localhost:3000/data', newData)
      .then(response => {
        alert('Data added successfully');
      })
      .catch(error => {
        console.error("There was an error adding the data!", error);
      });
  };

  return (
    <div>
      <h2>Add New Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default CreateData;
