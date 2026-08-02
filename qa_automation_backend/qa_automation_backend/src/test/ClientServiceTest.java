package com.example.qa_automation_backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
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
 * Tests unitaires de la couche Service Client.
 *
 * Le repository est simulé avec Mockito afin de tester
 * uniquement la logique métier du service.
 *
 * Scénarios testés :
 * - récupération de tous les clients
 * - recherche par identifiant
 * - sauvegarde
 * - suppression
 *
 * @author Jérémy Sabadie
 */
@ExtendWith(MockitoExtension.class)
class ClientServiceTest {



    @Mock
    private ClientRepository clientRepository;



    @InjectMocks
    private ClientService clientService;



    private Client client;



    /**
     * Initialisation des données utilisées dans les tests.
     */
    @BeforeEach
    void setUp() {


        client = new Client();

        client.setId(1L);
        client.setFirstName("Jeremy");
        client.setLastName("Sabadie");
        client.setEmail("jeremy.service@test.com");
        client.setBirthDate(
                LocalDate.of(1987, 1, 1)
        );

    }



    /**
     * Vérifie la récupération de tous les clients.
     */
    @Test
    void shouldFindAllClients() {


        when(clientRepository.findAll())
                .thenReturn(Arrays.asList(client));


        List<Client> result =
                clientService.findAll();


        assertThat(result)
                .hasSize(1);


        assertThat(result.get(0).getEmail())
                .isEqualTo("jeremy.service@test.com");


        verify(clientRepository, times(1))
                .findAll();

    }



    /**
     * Vérifie la recherche d'un client par ID.
     */
    @Test
    void shouldFindClientById() {


        when(clientRepository.findById(1L))
                .thenReturn(Optional.of(client));


        Optional<Client> result =
                clientService.findById(1L);


        assertThat(result)
                .isPresent();


        assertThat(result.get().getId())
                .isEqualTo(1L);


        verify(clientRepository)
                .findById(1L);

    }



    /**
     * Vérifie l'enregistrement d'un client.
     */
    @Test
    void shouldSaveClient() {


        when(clientRepository.save(client))
                .thenReturn(client);


        Client result =
                clientService.save(client);


        assertThat(result)
                .isNotNull();


        assertThat(result.getEmail())
                .isEqualTo("jeremy.service@test.com");


        verify(clientRepository)
                .save(client);

    }



    /**
     * Vérifie la suppression d'un client.
     */
    @Test
    void shouldDeleteClient() {


        clientService.deleteById(1L);


        verify(clientRepository)
                .deleteById(1L);

    }

}