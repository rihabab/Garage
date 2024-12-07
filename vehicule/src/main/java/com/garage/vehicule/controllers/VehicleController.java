package com.garage.vehicule.controllers;

import com.garage.vehicule.DTO.ClientDTO;
import com.garage.vehicule.entities.Vehicle;

import com.garage.vehicule.services.ClientServiceClient;
import com.garage.vehicule.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private ClientServiceClient clientServiceClient;

    // Add a new vehicle
    @PostMapping
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
        // Validate client existence in Client microservice
        ClientDTO client = clientServiceClient.getClientById(vehicle.getClientId());
        if (client == null) {
            throw new RuntimeException("Client not found with ID: " + vehicle.getClientId());
        }
        return vehicleService.addVehicle(vehicle);
    }

    // Update an existing vehicle
    @PutMapping("/{id}")
    public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails) {
        // Validate client existence in Client microservice
        ClientDTO client = clientServiceClient.getClientById(vehicleDetails.getClientId());
        if (client == null) {
            throw new RuntimeException("Client not found with ID: " + vehicleDetails.getClientId());
        }
        return vehicleService.updateVehicle(id, vehicleDetails);
    }

    // List all vehicles
    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    // Get a vehicle by ID
    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleService.getVehicleById(id);
    }

    // Delete a vehicle
    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
    }
}
