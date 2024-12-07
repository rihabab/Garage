// src/Dashboard.js
import React from 'react';
import { Box, Drawer, AppBar, Toolbar, List, ListItem, ListItemText, CssBaseline, Typography, Container, Grid, Paper, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Link, Outlet } from 'react-router-dom';

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

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem button component={Link} to="/clients">
            <ListItemText primary="Manage Clients" />
          </ListItem>
          <ListItem button component={Link} to="/cars">
            <ListItemText primary="Manage Cars" />
          </ListItem>
          <ListItem button component={Link} to="/workshops">
            <ListItemText primary="Schedule Workshops" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >


        
        {/* Topbar */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {/* Outlet renders the child route components like ClientsPage, CarsPage, etc. */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
