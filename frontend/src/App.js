import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [records, setRecords] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/records/');
    setRecords(response.data);
  };
  const updateStatus = async (id, status) => {

  await axios.put(
    `http://127.0.0.1:8000/api/update/${id}/`,
    { status }
  );

  fetchRecords();
};
  const handleUpload = async () => {

    const formData = new FormData();
    formData.append('file', file);

    await axios.post(
      'http://127.0.0.1:8000/api/upload/',
      formData
    );

    fetchRecords();
  };

  return (
    <div style={{
  padding: "30px",
  fontFamily: "Arial"
}}>

      <h1>Breathe ESG Dashboard</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload CSV
      </button>

      <br /><br />

      <table
  border="1"
  cellPadding="10"
  style={{
    borderCollapse: "collapse",
    width: "100%"
  }}
>

        <thead>
          <tr>
            <th>Source</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.source_type}</td>
              <td>{record.category}</td>
              <td>{record.quantity}</td>
              <td>{record.unit}</td>
              <td>{record.status}</td>

              <td>
                <button
  style={{ marginRight: "10px" }}
  onClick={() => updateStatus(record.id, 'APPROVED')}
>
  Approve
</button>

<button
  onClick={() => updateStatus(record.id, 'REJECTED')}
>
  Reject
</button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;