package com.garage.notify.feign;


import com.garage.notify.DTO.VehicleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "vehicle-service", url = "http://localhost:8081/api/vehicles")
public interface VehicleServiceClient {

    @GetMapping("/{id}")
    VehicleDTO getVehicleById(@PathVariable("id") Long id);
}
