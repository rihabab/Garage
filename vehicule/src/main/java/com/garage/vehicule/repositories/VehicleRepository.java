package com.garage.vehicule.repositories;

import com.garage.vehicule.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
