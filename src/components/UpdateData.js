import React, { useState } from 'react';
import axios from 'axios';

const UpdateData = ({ id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = { name, email };
    axios.put(`http://localhost:3000/data/${id}`, updatedData)
      .then(response => {
        alert('Data updated successfully');
      })
      .catch(error => {
        console.error("There was an error updating the data!", error);
      });
  };

  return (
    <div>
      <h2>Update Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <button type="submit">Update Data</button>
      </form>
    </div>
  );
};

export default UpdateData;
