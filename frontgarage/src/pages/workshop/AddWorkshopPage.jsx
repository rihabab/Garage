// src/components/pages/AddWorkshopPage.jsx
import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Container, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';

function AddWorkshopPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [vehicles, setVehicles] = useState([]); // For dynamically populating Vehicle IDs

  useEffect(() => {
    // Fetch vehicle data to populate the Vehicle ID dropdown
    fetch('http://localhost:8085/vehicles') // Replace with your actual backend endpoint
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data); // Assuming the response is an array of vehicles
      })
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8085/workshops', { // Update with your backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Workshop added successfully!');
      } else {
        alert('Failed to add workshop.');
      }
    } catch (error) {
      alert('Error adding workshop.');
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Add New Workshop</Typography>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Start Time */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Start Time"
                  fullWidth
                  variant="outlined"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  {...register('startTime', { required: 'Start Time is required' })}
                  error={!!errors.startTime}
                  helperText={errors.startTime ? errors.startTime.message : ''}
                />
              </Grid>

              {/* End Time */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="End Time"
                  fullWidth
                  variant="outlined"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  {...register('endTime', { required: 'End Time is required' })}
                  error={!!errors.endTime}
                  helperText={errors.endTime ? errors.endTime.message : ''}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  {...register('description', { required: 'Description is required' })}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description.message : ''}
                />
              </Grid>

              {/* Status */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" error={!!errors.status}>
                  <InputLabel>Status</InputLabel>
                  <Select {...register('status', { required: 'Status is required' })}>
                    <MenuItem value="Planned">Planned</MenuItem>
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                  {errors.status && <span>{errors.status.message}</span>}
                </FormControl>
              </Grid>

              {/* Vehicle ID */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" error={!!errors.vehicleId}>
                  <InputLabel>Vehicle ID</InputLabel>
                  <Select {...register('vehicleId', { required: 'Vehicle ID is required' })}>
                    {vehicles.map((vehicle) => (
                      <MenuItem key={vehicle.id} value={vehicle.id}>
                        {vehicle.id} - {vehicle.model}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.vehicleId && <span>{errors.vehicleId.message}</span>}
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Add Workshop
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Box>
  );
}

export default AddWorkshopPage;
