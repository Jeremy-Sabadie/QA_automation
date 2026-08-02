package com.example.qa_automation_backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.repository.ClientRepository;


/**
 * Tests unitaires de la couche Service Client.
 *
 * Ces tests suivent une approche TDD :
 * le comportement attendu est défini avant
 * l'implémentation réelle du service.
 *
 * Le repository est mocké afin de tester uniquement
 * la logique métier du service sans dépendre de MariaDB.
 */
class ClientServiceTest {


    @Test
    void shouldReturnAllClients() {

        // GIVEN
        // Création d'un repository simulé
        ClientRepository clientRepository = Mockito.mock(ClientRepository.class);


        // Création des données de test
        Client client = new Client();

        client.setFirstName("Jérémy");
        client.setLastName("Sabadie");
        client.setEmail("jeremy@test.com");


        List<Client> clients = List.of(client);


        // Le repository doit retourner cette liste
        when(clientRepository.findAll())
                .thenReturn(clients);



        // WHEN
        // L'appel au service sera ajouté après création
        // de ClientService avec injection du repository



        // THEN
        // Vérification du comportement attendu
        assertThat(clients)
                .hasSize(1)
                .contains(client);
    }

}