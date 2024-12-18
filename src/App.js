import React from 'react';
import ReadData from './components/ReadData';
import CreateData from './components/CreateData';
import UpdateData from './components/UpdateData';
import DeleteData from './components/DeleteData';

function App() {
  return (
    <div>
      <h1>Frontend App</h1>
      <ReadData />
      <CreateData />
      {/* Pass a specific ID for Update and Delete, for testing purposes */}
      <UpdateData id={1} />
      <DeleteData id={1} />
    </div>
  );
}

export default App;
