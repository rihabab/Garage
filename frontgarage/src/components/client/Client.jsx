import React from 'react';
import { Paper, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './Client.css';
const columns = [
  { field: 'cin', headerName: 'CIN', width: 100 },
  { field: 'nom', headerName: 'Nom', width: 180 },
  { field: 'prenom', headerName: 'Prénom', width: 180 },
  { field: 'adresse', headerName: 'Adresse', width: 180 },
  { field: 'telephone', headerName: 'NUM', type: 'number', width: 130 },
  { field: 'email', headerName: 'Email', width: 180 },
];

const rows = [
    { id: 1, cin: 'A12345678', nom: 'John', prenom: 'Doe', adresse: '123 Main St', telephone: '555-1234', email: 'john.doe@example.com' },
    { id: 2, cin: 'B23456789', nom: 'Jane', prenom: 'Smith', adresse: '456 Oak Rd', telephone: '555-2345', email: 'jane.smith@example.com' },
    { id: 3, cin: 'C34567890', nom: 'Michael', prenom: 'Johnson', adresse: '789 Pine Ave', telephone: '555-3456', email: 'michael.johnson@example.com' },
    { id: 4, cin: 'D45678901', nom: 'Emily', prenom: 'Davis', adresse: '101 Maple Blvd', telephone: '555-4567', email: 'emily.davis@example.com' },
    { id: 5, cin: 'E56789012', nom: 'David', prenom: 'Brown', adresse: '202 Cedar Ln', telephone: '555-5678', email: 'david.brown@example.com' },
];

function Client() {
    return (
      <Box sx={{ padding: 2 }}>
        <Paper className="client-paper">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            className="client-datagrid" // Apply the custom styles
          />
        </Paper>
      </Box>
    );
  }

export default Client;
