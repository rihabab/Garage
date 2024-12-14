// src/components/pages/AddCarPage.jsx
import React from 'react';
import { Box, Paper, Typography, Container, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';

function AddCarPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8085/vehicles', { // Update with your backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Car added successfully!');
      } else {
        alert('Failed to add car.');
      }
    } catch (error) {
      alert('Error adding car.');
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Add New Car</Typography>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* VIN */}
              <Grid item xs={12} sm={6}>
                <TextField label="VIN" fullWidth variant="outlined" {...register('vin', { required: 'VIN is required' })} error={!!errors.vin} helperText={errors.vin ? errors.vin.message : ''} />
              </Grid>
              
              {/* Registration Number */}
              <Grid item xs={12} sm={6}>
                <TextField label="Registration Number" fullWidth variant="outlined" {...register('registrationNumber', { required: 'Registration Number is required' })} error={!!errors.registrationNumber} helperText={errors.registrationNumber ? errors.registrationNumber.message : ''} />
              </Grid>

              {/* Brand */}
              <Grid item xs={12} sm={6}>
                <TextField label="Brand" fullWidth variant="outlined" {...register('brand', { required: 'Brand is required' })} error={!!errors.brand} helperText={errors.brand ? errors.brand.message : ''} />
              </Grid>

              {/* Model */}
              <Grid item xs={12} sm={6}>
                <TextField label="Model" fullWidth variant="outlined" {...register('model', { required: 'Model is required' })} error={!!errors.model} helperText={errors.model ? errors.model.message : ''} />
              </Grid>

              {/* Year */}
              <Grid item xs={12} sm={6}>
                <TextField label="Year" fullWidth variant="outlined" type="number" {...register('year', { required: 'Year is required' })} error={!!errors.year} helperText={errors.year ? errors.year.message : ''} />
              </Grid>

              {/* Color */}
              <Grid item xs={12} sm={6}>
                <TextField label="Color" fullWidth variant="outlined" {...register('color', { required: 'Color is required' })} error={!!errors.color} helperText={errors.color ? errors.color.message : ''} />
              </Grid>

              {/* Mileage */}
              <Grid item xs={12} sm={6}>
                <TextField label="Mileage" fullWidth variant="outlined" type="number" {...register('mileage', { required: 'Mileage is required' })} error={!!errors.mileage} helperText={errors.mileage ? errors.mileage.message : ''} />
              </Grid>

              {/* Fuel Type */}
              <Grid item xs={12} sm={6}>
                <TextField label="Fuel Type" fullWidth variant="outlined" {...register('fuelType', { required: 'Fuel Type is required' })} error={!!errors.fuelType} helperText={errors.fuelType ? errors.fuelType.message : ''} />
              </Grid>

              {/* Purchase Date */}
              <Grid item xs={12} sm={6}>
                <TextField label="Purchase Date" fullWidth variant="outlined" type="date" {...register('purchaseDate', { required: 'Purchase Date is required' })} error={!!errors.purchaseDate} helperText={errors.purchaseDate ? errors.purchaseDate.message : ''} />
              </Grid>

              {/* Vehicle Status (Dropdown) */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" error={!!errors.vehicleStatus}>
                  <InputLabel>Vehicle Status</InputLabel>
                  <Select {...register('vehicleStatus', { required: 'Vehicle Status is required' })}>
                    <MenuItem value="In Repair">In Repair</MenuItem>
                    <MenuItem value="Available">Available</MenuItem>
                    <MenuItem value="Sold">Sold</MenuItem>
                    <MenuItem value="Booked">Booked</MenuItem>
                  </Select>
                  {errors.vehicleStatus && <span>{errors.vehicleStatus.message}</span>}
                </FormControl>
              </Grid>

              {/* Client ID (Dropdown or TextField) */}
              <Grid item xs={12} sm={6}>
                <TextField label="Client ID" fullWidth variant="outlined" {...register('clientId', { required: 'Client ID is required' })} error={!!errors.clientId} helperText={errors.clientId ? errors.clientId.message : ''} />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">Add Car</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Box>
  );
}

export default AddCarPage;
