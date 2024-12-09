package com.garage.workshop.RabbitMQ;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {
    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }
    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory, Jackson2JsonMessageConverter jsonMessageConverter) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(jsonMessageConverter);
        return rabbitTemplate;
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
    public Queue workshopCompletedQueue() {
        return new Queue("workshop.completed.queue");
    }

    @Bean
    public Binding workshopPlannedBinding(Queue workshopPlannedQueue, TopicExchange workshopExchange) {
        return BindingBuilder.bind(workshopPlannedQueue).to(workshopExchange).with("workshop.planned");
    }

    @Bean
    public Binding workshopCompletedBinding(Queue workshopCompletedQueue, TopicExchange workshopExchange) {
        return BindingBuilder.bind(workshopCompletedQueue).to(workshopExchange).with("workshop.completed");
    }
}
