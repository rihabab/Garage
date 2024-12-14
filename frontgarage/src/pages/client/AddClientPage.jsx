// src/components/pages/AddClientPage.jsx
import React from 'react';
import { Box, Paper, Typography, Container, TextField, Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

function AddClientPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8085/clients', { // Update with your backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Client added successfully!');
      } else {
        alert('Failed to add client.');
      }
    } catch (error) {
      alert('Error adding client.');
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">Add New Client</Typography>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField label="Identity Number" fullWidth variant="outlined" {...register('identityNumber', { required: 'Identity Number is required' })} error={!!errors.identityNumber} helperText={errors.identityNumber ? errors.identityNumber.message : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" fullWidth variant="outlined" {...register('lastName', { required: 'Last Name is required' })} error={!!errors.lastName} helperText={errors.lastName ? errors.lastName.message : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" fullWidth variant="outlined" {...register('firstName', { required: 'First Name is required' })} error={!!errors.firstName} helperText={errors.firstName ? errors.firstName.message : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Address" fullWidth variant="outlined" {...register('address', { required: 'Address is required' })} error={!!errors.address} helperText={errors.address ? errors.address.message : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone" fullWidth variant="outlined" {...register('phone', { required: 'Phone number is required' })} error={!!errors.phone} helperText={errors.phone ? errors.phone.message : ''} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" fullWidth variant="outlined" type="email" {...register('email', { required: 'Email is required' })} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">Add Client</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Box>
  );
}

export default AddClientPage;
