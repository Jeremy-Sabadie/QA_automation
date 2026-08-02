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
 * Elle communique avec le repository afin d'accéder aux données.
 *
 * L'injection par constructeur facilite les tests unitaires
 * avec des mocks Mockito.
 *
 * @author Jérémy Sabadie
 */
@Service
public class ClientService {


    private final ClientRepository clientRepository;



    /**
     * Injection du repository client.
     *
     * @param clientRepository repository permettant l'accès aux clients
     */
    public ClientService(ClientRepository clientRepository) {

        this.clientRepository = clientRepository;
    }




    /**
     * Recherche et retourne tous les clients enregistrés.
     *
     * @return liste complète des clients
     */
    public List<Client> findAll() {

        return clientRepository.findAll();
    }




    /**
     * Recherche un client par son identifiant.
     *
     * @param id identifiant du client
     * @return client trouvé ou vide si inexistant
     */
    public Optional<Client> findById(Long id) {

        return clientRepository.findById(id);
    }




    /**
     * Enregistre un nouveau client ou met à jour
     * un client existant.
     *
     * @param client client à sauvegarder
     * @return client sauvegardé
     */
    public Client save(Client client) {

        return clientRepository.save(client);
    }




    /**
     * Supprime un client par son identifiant.
     *
     * @param id identifiant du client à supprimer
     */
    public void deleteById(Long id) {

        clientRepository.deleteById(id);
    }

}