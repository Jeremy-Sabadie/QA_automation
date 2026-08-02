package com.example.qa_automation_backend.controller;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.service.ClientService;

@RestController
@RequestMapping("/api/clients")
public class ClientController {


    private final ClientService clientService;


    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {

        return ResponseEntity.ok(clientService.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {

        return clientService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {

        Client savedClient = clientService.save(client);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedClient);
    }


    // ICI seulement
    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(
            @PathVariable Long id,
            @RequestBody Client client) {


        java.util.Optional<Client> existingClient = clientService.findById(id);


        if (existingClient.isEmpty()) {
            return ResponseEntity.notFound().build();
        }


        Client clientToUpdate = existingClient.get();


        clientToUpdate.setFirstName(client.getFirstName());
        clientToUpdate.setLastName(client.getLastName());
        clientToUpdate.setEmail(client.getEmail());
        clientToUpdate.setPhone(client.getPhone());
        clientToUpdate.setBirthDate(client.getBirthDate());
        clientToUpdate.setAddress(client.getAddress());
        clientToUpdate.setPostalCode(client.getPostalCode());
        clientToUpdate.setCity(client.getCity());


        Client updatedClient = clientService.save(clientToUpdate);


        return ResponseEntity.ok(updatedClient);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {

        clientService.deleteById(id);

        return ResponseEntity.noContent().build();
    }

}