package com.example.qa_automation_backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.repository.ClientRepository;


/**
 * Tests unitaires de la couche ClientService.
 *
 * Objectif :
 * Vérifier que la logique métier du service client
 * fonctionne indépendamment de la base de données.
 *
 * Le repository est mocké afin de contrôler les réponses
 * retournées par la couche persistence.
 */
@ExtendWith(MockitoExtension.class)
class ClientServiceTest {


    @Mock
    private ClientRepository clientRepository;


    @InjectMocks
    private ClientService clientService;



    private Client client;



    /**
     * Préparation des données communes utilisées
     * dans les différents scénarios de test.
     */
    @BeforeEach
    void setup() {

        client = new Client();

        client.setId(1L);
        client.setFirstName("Jean");
        client.setLastName("Dupont");
        client.setEmail("jean.dupont@test.com");
        client.setCity("Bordeaux");
    }




    /**
     * Vérifie que le service retourne la liste
     * complète des clients fournie par le repository.
     */
    @Test
    void shouldFindAllClients() {


        // Given : le repository retourne deux clients
        when(clientRepository.findAll())
                .thenReturn(Arrays.asList(client, client));


        // When : appel du service
        List<Client> clients = clientService.findAll();



        // Then : vérification du résultat
        assertThat(clients)
                .isNotNull()
                .hasSize(2);



        verify(clientRepository, times(1))
                .findAll();

    }




    /**
     * Vérifie la recherche d'un client par son identifiant.
     */
    @Test
    void shouldFindClientById() {


        // Given
        when(clientRepository.findById(1L))
                .thenReturn(Optional.of(client));


        // When
        Optional<Client> result =
                clientService.findById(1L);



        // Then
        assertThat(result)
                .isPresent()
                .contains(client);


        verify(clientRepository)
                .findById(1L);

    }




    /**
     * Vérifie l'enregistrement d'un nouveau client.
     */
    @Test
    void shouldSaveClient() {


        // Given
        when(clientRepository.save(client))
                .thenReturn(client);



        // When
        Client savedClient =
                clientService.save(client);



        // Then
        assertThat(savedClient)
                .isNotNull()
                .isEqualTo(client);



        verify(clientRepository)
                .save(client);

    }




    /**
     * Vérifie la suppression d'un client.
     */
    @Test
    void shouldDeleteClient() {


        // When
        clientService.deleteById(1L);



        // Then
        verify(clientRepository)
                .deleteById(1L);

    }


}