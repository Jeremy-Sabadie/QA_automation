package com.example.qa_automation_backend.entity;

import static org.junit.Assert.assertThat;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import java.time.LocalDateTime;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;


/**
 * Tests unitaires de l'entité Client.
 *
 * Objectif :
 * Vérifier que l'objet métier Client respecte son contrat
 * avant d'être utilisé par les couches Repository, Service
 * et Controller.
 *
 * Approche :
 * - TDD
 * - Tests indépendants
 * - Vérification du comportement attendu
 *
 * @author Jérémy Sabadie
 */
class ClientTest {


    @Test
    @DisplayName("Should create a client with all attributes")
    void shouldCreateClientWithAllAttributes() {


        // GIVEN
        Client client = new Client();

        LocalDate birthDate = LocalDate.of(1990, 1, 15);
        LocalDateTime creationDate = LocalDateTime.now();


        // WHEN
        client.setFirstName("Jérémy");
        client.setLastName("Sabadie");
        client.setEmail("jeremy@test.com");
        client.setPhone("0600000000");
        client.setBirthDate(birthDate);
        client.setAddress("1 rue de test");
        client.setPostalCode("33000");
        client.setCity("Bordeaux");
        client.setCreatedAt(creationDate);
        client.setUpdatedAt(creationDate);


        // THEN
        assertThat(client.getFirstName())
                .isEqualTo("Jérémy");

        assertThat(client.getLastName())
                .isEqualTo("Sabadie");

        assertThat(client.getEmail())
                .isEqualTo("jeremy@test.com");

        assertThat(client.getPhone())
                .isEqualTo("0600000000");

        assertThat(client.getBirthDate())
                .isEqualTo(birthDate);

        assertThat(client.getCity())
                .isEqualTo("Bordeaux");

        assertThat(client.getCreatedAt())
                .isEqualTo(creationDate);

        assertThat(client.getUpdatedAt())
                .isEqualTo(creationDate);
    }



    @Test
    @DisplayName("Should update client identifier")
    void shouldUpdateClientIdentifier() {


        // GIVEN
        Client client = new Client();


        // WHEN
        client.setId(1L);


        // THEN
        assertThat(client.getId())
                .isEqualTo(1L);
    }


}