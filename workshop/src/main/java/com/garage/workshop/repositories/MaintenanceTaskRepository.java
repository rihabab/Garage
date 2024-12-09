package com.garage.workshop.repositories;

import com.garage.workshop.entities.MaintenanceTask;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaintenanceTaskRepository extends JpaRepository<MaintenanceTask, Long> {
    List<MaintenanceTask> findByVehicleId(Long vehicleId);
}
