// src/components/pages/WorkshopsPage.jsx
import React, { useEffect, useState } from 'react';
import { Typography, Paper, Box, Container, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'startTime', headerName: 'Start Time', width: 200 },
  { field: 'endTime', headerName: 'End Time', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'vehicleId', headerName: 'Vehicle ID', width: 150 },
];

function WorkshopsPage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('http://localhost:8085/workshops')
      .then((response) => response.json())
      .then((data) => {
        // Map the response to the rows format required by DataGrid
        const mappedRows = data.map((workshop, index) => ({
          id: workshop.id, // Maps directly from API response
          startTime: workshop.startTime, // Maps directly from API response
          endTime: workshop.endTime, // Maps directly from API response
          description: workshop.description, // Maps directly from API response
          status: workshop.status, // Maps directly from API response
          vehicleId: workshop.vehicleId, // Maps directly from API response
        }));
        setRows(mappedRows);
      })
      .catch((error) => console.error('Error fetching workshops:', error));
  }, []);

  const handleAddWorkshop = () => {
    navigate('/add-workshop'); // Navigate to Add Workshop form
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Workshops</Typography>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Stack spacing={3}>
            {/* DataGrid Component */}
            <Box>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Recent Workshops</Typography>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
              </Paper>
            </Box>

            {/* Add Workshop Button */}
            <Box textAlign="right">
              <Button variant="contained" color="primary" onClick={handleAddWorkshop}>
                Add Workshop
              </Button>
            </Box>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default WorkshopsPage;
