package com.garage.notify.service;




import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.garage.notify.DTO.ClientDTO;
import com.garage.notify.DTO.VehicleDTO;
import com.garage.notify.config.WorkshopEvent;
import com.garage.notify.feign.ClientServiceClient;
import com.garage.notify.feign.VehicleServiceClient;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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






    @RabbitListener(queues = "workshop.planned.queue")
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
        String message = "Dear Client,\n\nYour workshop has been scheduled:\n\n" +
                "Workshop ID: " + event.getWorkshopId() + "\n" +
                "Description: " + event.getDescription() + "\n" +
                "Status: " + event.getStatus() + "\n\nThank you!";

        // Send the email
        emailService.sendEmail(clientEmail, subject, message);
    }
}

