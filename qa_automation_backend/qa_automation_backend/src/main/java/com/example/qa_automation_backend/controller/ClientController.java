package com.example.qa_automation_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.service.ClientService;


/**
 * Contrôleur REST exposant les opérations CRUD concernant les clients.
 *
 * Endpoints :
 *
 * GET    /api/clients
 * GET    /api/clients/{id}
 * POST   /api/clients
 * DELETE /api/clients/{id}
 *
 * @author Jérémy Sabadie
 */
@RestController
@RequestMapping("/api/clients")
public class ClientController {


    private final ClientService clientService;


    /**
     * Injection du service client.
     *
     * @param clientService service métier client
     */
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    /**
     * Récupère tous les clients.
     *
     * @return liste des clients
     */
    @GetMapping
    public ResponseEntity<List<Client>> findAll() {

        return ResponseEntity.ok(clientService.findAll());
    }


    /**
     * Récupère un client par son identifiant.
     *
     * @param id identifiant du client
     * @return client ou 404
     */
    @GetMapping("/{id}")
    public ResponseEntity<Client> findById(@PathVariable Long id) {

        return clientService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    /**
     * Création d'un client.
     *
     * @param client client à enregistrer
     * @return client créé avec HTTP 201
     */
    @PostMapping
    public ResponseEntity<Client> create(@RequestBody Client client) {

        Client savedClient = clientService.save(client);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedClient);
    }


    /**
     * Suppression d'un client.
     *
     * @param id identifiant du client
     * @return HTTP 204
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        clientService.deleteById(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}