package com.garage.client.services;

import com.garage.client.entities.Client;
import com.garage.client.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    // Add a new client
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    // Update an existing client
    public Client updateClient(Long id, Client clientDetails) {
        Client client = clientRepository.findById(id).orElseThrow(() -> new RuntimeException("Client not found"));
        client.setIdentityNumber(clientDetails.getIdentityNumber());
        client.setLastName(clientDetails.getLastName());
        client.setFirstName(clientDetails.getFirstName());
        client.setAddress(clientDetails.getAddress());
        client.setPhone(clientDetails.getPhone());
        client.setEmail(clientDetails.getEmail());
        return clientRepository.save(client);
    }

    // Get the list of all clients
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    // Get a single client by ID
    public Client getClientById(Long id) {
        return clientRepository.findById(id).orElseThrow(() -> new RuntimeException("Client not found"));
    }

    // Delete a client
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
