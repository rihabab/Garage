// src/components/pages/ClientsPage.jsx
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function ClientsPage() {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Manage Clients</Typography>
        {/* Add your client management form or table here */}
      </Paper>
    </Box>
  );
}

export default ClientsPage;
