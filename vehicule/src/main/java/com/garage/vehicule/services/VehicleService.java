package com.garage.vehicule.services;

import com.garage.vehicule.entities.Vehicle;
import com.garage.vehicule.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ClientServiceClient clientServiceClient;

    // Add a new vehicle
    public Vehicle addVehicle(Vehicle vehicle) {
        // Validate the clientId by communicating with the Client microservice
        clientServiceClient.getClientById(vehicle.getClientId());

        // Save the vehicle if the client exists
        return vehicleRepository.save(vehicle);
    }

    // List all vehicles
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Get a vehicle by ID
    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    // Update an existing vehicle
    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found"));

        // Validate the new clientId if it's updated
        clientServiceClient.getClientById(vehicleDetails.getClientId());

        vehicle.setVin(vehicleDetails.getVin());
        vehicle.setRegistrationNumber(vehicleDetails.getRegistrationNumber());
        vehicle.setBrand(vehicleDetails.getBrand());
        vehicle.setModel(vehicleDetails.getModel());
        vehicle.setYear(vehicleDetails.getYear());
        vehicle.setColor(vehicleDetails.getColor());
        vehicle.setMileage(vehicleDetails.getMileage());
        vehicle.setFuelType(vehicleDetails.getFuelType());
        vehicle.setPurchaseDate(vehicleDetails.getPurchaseDate());
        vehicle.setVehicleStatus(vehicleDetails.getVehicleStatus());
        vehicle.setClientId(vehicleDetails.getClientId());

        return vehicleRepository.save(vehicle);
    }

    // Delete a vehicle
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }


}
