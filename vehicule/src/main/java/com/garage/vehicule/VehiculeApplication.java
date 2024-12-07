package com.garage.vehicule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class VehiculeApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehiculeApplication.class, args);
	}

}
