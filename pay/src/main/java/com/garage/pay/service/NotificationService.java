package com.garage.pay.service;


import com.garage.pay.DTO.ClientDTO;
import com.garage.pay.DTO.VehicleDTO;
import com.garage.pay.config.WorkshopEvent;
import com.garage.pay.feign.ClientServiceClient;
import com.garage.pay.feign.VehicleServiceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    Logger logger = LoggerFactory.getLogger(NotificationService.class);


    @Autowired
    private EmailService emailService;

    @Autowired
    private VehicleServiceClient vehicleFeignClient;

    @Autowired
    private ClientServiceClient clientFeignClient;






    @RabbitListener(queues = "workshop.completed.queue")
    public void handleWorkshopPlannedEvent(WorkshopEvent event) {
        logger.info("Received a message from RabbitMQ queue: " + event);

        // Get Vehicle details first using the vehicleId
        VehicleDTO vehicle = vehicleFeignClient.getVehicleById(event.getVehicleId());

        // Get Client details using the clientId from the Vehicle details
        ClientDTO client = clientFeignClient.getClientById(vehicle.getClientId());

        // Extract the client's email from the Client object
        String clientEmail = client.getEmail();

        // Compose the email content
        String subject = "Workshop Planned Notification";
        String message = "Dear Client,\n\nYour workshop has been completed:\n\n" +
                "Workshop ID: " + event.getWorkshopId() + "\n" +
                "Description: " + event.getDescription() + "\n" +
                "cost: " + event.getCost() + "\n" +
                "Status: " + event.getStatus() + "\n\nThank you!";

        // Send the email
        emailService.sendEmail(clientEmail, subject, message);
    }
}

