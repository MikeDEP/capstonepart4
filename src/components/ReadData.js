import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReadData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadData;
