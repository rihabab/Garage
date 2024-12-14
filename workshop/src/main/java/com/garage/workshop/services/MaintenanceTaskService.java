package com.garage.workshop.services;


import com.garage.workshop.entities.MaintenanceTask;
import com.garage.workshop.eventPublisher.WorkshopEvent;
import com.garage.workshop.eventPublisher.WorkshopEventPublisher;
import com.garage.workshop.repositories.MaintenanceTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaintenanceTaskService {
    @Autowired
    private MaintenanceTaskRepository maintenanceTaskRepository;

    @Autowired
    private WorkshopEventPublisher workshopEventPublisher;

    public MaintenanceTask addTask(MaintenanceTask task) {
        task.setStatus("Planned");
        MaintenanceTask savedTask = maintenanceTaskRepository.save(task);

        // Publish workshop planned event
        WorkshopEvent event = new WorkshopEvent();
        event.setWorkshopId(savedTask.getId());
        event.setVehicleId(savedTask.getVehicleId());
        event.setDescription(savedTask.getDescription());
        event.setStatus("Planned");
        workshopEventPublisher.publishWorkshopPlannedEvent(event);

        return savedTask;
    }

    public MaintenanceTask completeTask(Long id, double cost) {
        MaintenanceTask task = maintenanceTaskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setStatus("Completed");
        MaintenanceTask savedTask = maintenanceTaskRepository.save(task);

        // Publish workshop completed event
        WorkshopEvent event = new WorkshopEvent();
        event.setWorkshopId(savedTask.getId());
        event.setVehicleId(savedTask.getVehicleId());
        event.setDescription(savedTask.getDescription());
        event.setStatus("Completed");
        event.setCost(cost); // Example cost
        workshopEventPublisher.publishWorkshopCompletedEvent(event);

        return savedTask;
    }

    public List<MaintenanceTask> getAllTasks() {
        return maintenanceTaskRepository.findAll();
    }
}
