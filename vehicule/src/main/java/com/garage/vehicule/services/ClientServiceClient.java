package com.garage.vehicule.services;

import com.garage.vehicule.DTO.ClientDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "client-service", url = "http://localhost:8080/api/clients") // Update with the actual URL
public interface ClientServiceClient {

    @GetMapping("/{id}")
    ClientDTO getClientById(@PathVariable("id") Long id);
}

// DTO for client information

