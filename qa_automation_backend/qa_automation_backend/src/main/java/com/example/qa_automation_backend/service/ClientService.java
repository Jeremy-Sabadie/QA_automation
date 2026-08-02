package com.example.qa_automation_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.repository.ClientRepository;


/**
 * Service métier responsable de la gestion des clients.
 *
 * Cette couche contient la logique métier de l'application.
 * Elle fait le lien entre le contrôleur REST et la couche repository.
 *
 * L'injection par constructeur facilite les tests unitaires
 * avec Mockito.
 *
 * @author Jérémy Sabadie
 */
@Service
public class ClientService {


    private final ClientRepository clientRepository;


    /**
     * Injection du repository client.
     *
     * @param clientRepository repository permettant l'accès aux données clients
     */
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    /**
     * Retourne la liste complète des clients.
     *
     * @return liste des clients
     */
    public List<Client> findAll() {

        return clientRepository.findAll();
    }


    /**
     * Recherche un client par son identifiant.
     *
     * @param id identifiant du client
     * @return client trouvé ou Optional vide
     */
    public Optional<Client> findById(Long id) {

        return clientRepository.findById(id);
    }


    /**
     * Création ou modification d'un client.
     *
     * @param client client à enregistrer
     * @return client sauvegardé
     */
    public Client save(Client client) {

        return clientRepository.save(client);
    }


    /**
     * Suppression d'un client.
     *
     * @param id identifiant du client à supprimer
     */
    public void deleteById(Long id) {

        clientRepository.deleteById(id);
    }

}