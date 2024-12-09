package com.garage.workshop.eventPublisher;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkshopEventPublisher {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void publishWorkshopPlannedEvent(WorkshopEvent event) {
        rabbitTemplate.convertAndSend("workshop.exchange", "workshop.planned", event);
    }

    public void publishWorkshopCompletedEvent(WorkshopEvent event) {
        rabbitTemplate.convertAndSend("workshop.exchange", "workshop.completed", event);
    }
}
