// src/components/pages/CarsPage.jsx
import React, { useEffect, useState } from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'vin', headerName: 'VIN', width: 150 }, // Maps to vin
  { field: 'registrationNumber', headerName: 'Registration Number', width: 200 }, // Maps to registrationNumber
  { field: 'brand', headerName: 'Brand', width: 150 }, // Maps to brand
  { field: 'model', headerName: 'Model', width: 150 }, // Maps to model
  { field: 'year', headerName: 'Year', width: 120 }, // Maps to year
  { field: 'color', headerName: 'Color', width: 150 }, // Maps to color
  { field: 'mileage', headerName: 'Mileage', width: 150 }, // Maps to mileage
  { field: 'fuelType', headerName: 'Fuel Type', width: 150 }, // Maps to fuelType
  { field: 'purchaseDate', headerName: 'Purchase Date', width: 150 }, // Maps to purchaseDate
];

function CarsPage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();  // Hook to navigate to other pages

  useEffect(() => {
    fetch('http://localhost:8085/vehicles') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        const mappedRows = data.map((car, index) => ({
          id: index + 1,
          vin: car.vin,
          registrationNumber: car.registrationNumber,
          brand: car.brand,
          model: car.model,
          year: car.year,
          color: car.color,
          mileage: car.mileage,
          fuelType: car.fuelType,
          purchaseDate: car.purchaseDate,
        }));
        setRows(mappedRows);
      })
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  const handleAddCar = () => {
    navigate('/add-car');  // Redirect to the "Add Car" form page
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Manage Cars</Typography>
        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Cars</Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddCar}
              sx={{ mt: 2 }}
            >
              Add Car
            </Button>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default CarsPage;
