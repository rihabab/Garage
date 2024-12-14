// src/components/pages/ClientsPage.jsx
import React, { useEffect, useState } from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'cin', headerName: 'CIN', width: 150 }, // Maps to "identityNumber"
  { field: 'nom', headerName: 'Nom', width: 150 }, // Maps to "lastName"
  { field: 'prenom', headerName: 'Prénom', width: 150 }, // Maps to "firstName"
  { field: 'address', headerName: 'Address', width: 200 }, // Maps to "address"
  { field: 'phone', headerName: 'Phone', width: 150 }, // Maps to "phone"
  { field: 'email', headerName: 'Email', width: 200 }, // Maps to "email"
];

function ClientsPage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();  // Hook to navigate to other pages

  useEffect(() => {
    fetch('http://localhost:8085/clients') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        const mappedRows = data.map((client, index) => ({
          id: index + 1,
          cin: client.identityNumber,
          nom: client.lastName,
          prenom: client.firstName,
          address: client.address,
          phone: client.phone,
          email: client.email,
        }));
        setRows(mappedRows);
      })
      .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  const handleAddClient = () => {
    navigate('/add-client');  // Redirect to the "Add Client" form page
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Manage Clients</Typography>
        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Clients</Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddClient}
              sx={{ mt: 2 }}
            >
              Add Client
            </Button>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default ClientsPage;
