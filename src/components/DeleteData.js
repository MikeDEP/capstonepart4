import React from 'react';
import axios from 'axios';

const DeleteData = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then(response => {
        alert('Data deleted successfully');
      })
      .catch(error => {
        console.error("There was an error deleting the data!", error);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteData;
