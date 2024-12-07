// src/components/pages/CarsPage.jsx
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemText, CssBaseline, Container, Grid, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'cin', headerName: 'CIN', width: 150 },
    { field: 'nom', headerName: 'Nom', width: 150 },
    { field: 'prenom', headerName: 'Prénom', width: 150 },
  ];
  
  const rows = [
    { id: 1, cin: 'A12345678', nom: 'John', prenom: 'Doe' },
    { id: 2, cin: 'B23456789', nom: 'Jane', prenom: 'Smith' },
    { id: 3, cin: 'C34567890', nom: 'Michael', prenom: 'Johnson' },
    { id: 4, cin: 'D45678901', nom: 'Emily', prenom: 'Davis' },
    { id: 5, cin: 'E56789012', nom: 'David', prenom: 'Brown' },
  ];
  
  const dashboardData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
  ];
  
  const drawerWidth = 240;

  
function CarsPage() {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Manage Cars</Typography>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Stack spacing={3}>
            {/* First Widget: Chart */}
            {/* <Box>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                <Typography variant="h6">Monthly Sales</Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dashboardData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#1976d2" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Box> */}

            {/* Second Widget: DataGrid */}
            <Box>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Recent Clients</Typography>
                <div style={{ height: 300, width: '100%' }}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
              </Paper>
            </Box>

            {/* Third Widget: Table or any other content */}
            <Box>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1">
                  Here you can display additional statistics, charts, or tables.
                </Typography>
              </Paper>
            </Box>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default CarsPage;
