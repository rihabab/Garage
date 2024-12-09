package com.garage.workshop.controllers;


import com.garage.workshop.entities.MaintenanceTask;
import com.garage.workshop.services.MaintenanceTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workshops")
public class MaintenanceTaskController {
    @Autowired
    private MaintenanceTaskService maintenanceTaskService;

    @PostMapping
    public MaintenanceTask addTask(@RequestBody MaintenanceTask task) {
        return maintenanceTaskService.addTask(task);
    }

    @PutMapping("/{id}/complete")
    public MaintenanceTask completeTask(@PathVariable Long id) {
        return maintenanceTaskService.completeTask(id);
    }

    @GetMapping
    public List<MaintenanceTask> getAllTasks() {
        return maintenanceTaskService.getAllTasks();
    }
}
