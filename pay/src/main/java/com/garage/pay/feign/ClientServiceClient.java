package com.garage.pay.feign;


import com.garage.pay.DTO.ClientDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "client-service", url = "http://localhost:8080/api/clients")
public interface ClientServiceClient {

    @GetMapping("/{id}")
    ClientDTO getClientById(@PathVariable("id") Long id);
}