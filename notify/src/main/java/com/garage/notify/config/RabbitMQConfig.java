package com.garage.notify.config;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.support.converter.DefaultJackson2JavaTypeMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;

import java.util.Map;


@Configuration
public class RabbitMQConfig {

    @Bean
    public Jackson2JsonMessageConverter jackson2JsonMessageConverter() {
        Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();
        DefaultJackson2JavaTypeMapper typeMapper = new DefaultJackson2JavaTypeMapper();
        typeMapper.setIdClassMapping(Map.of(
                "com.garage.workshop.eventPublisher.WorkshopEvent", com.garage.notify.config.WorkshopEvent.class
        ));
        converter.setJavaTypeMapper(typeMapper);
        return converter;
    }

    @Bean
    public TopicExchange workshopExchange() {
        return new TopicExchange("workshop.exchange");
    }

    @Bean
    public Queue workshopPlannedQueue() {
        return new Queue("workshop.planned.queue");
    }

    @Bean
    public Binding workshopPlannedBinding(Queue workshopPlannedQueue, TopicExchange workshopExchange) {
        return BindingBuilder.bind(workshopPlannedQueue).to(workshopExchange).with("workshop.planned");
    }

}
