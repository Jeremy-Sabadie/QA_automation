package com.example.qa_automation_backend.repository;


import static org.assertj.core.api.Assertions.assertThat;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import org.springframework.test.context.ActiveProfiles;


import com.example.qa_automation_backend.entity.Client;



@DataJpaTest
@ActiveProfiles("test")
@AutoConfigureTestDatabase(
        replace = AutoConfigureTestDatabase.Replace.NONE
)
public class ClientRepositoryTest {


    @Autowired
    private ClientRepository clientRepository;



    private Client createClient(String email) {


        Client client = new Client();

        client.setFirstName("Jean");
        client.setLastName("Dupont");
        client.setEmail(email);

        client.setPhone("0600000000");
        client.setBirthDate(LocalDate.of(1990, 1, 1));

        client.setAddress("10 rue test");
        client.setPostalCode("33000");
        client.setCity("Bordeaux");

        client.setCreatedAt(LocalDateTime.now());
        client.setUpdatedAt(LocalDateTime.now());


        return client;
    }



    @Test
    void shouldSaveClient() {


        Client client =
                createClient("save@test.com");


        Client saved =
                clientRepository.save(client);


        assertThat(saved.getId())
                .isNotNull();

    }



    @Test
    void shouldFindAllClients() {


        clientRepository.save(
                createClient("all@test.com")
        );


        List<Client> clients =
                clientRepository.findAll();


        assertThat(clients)
                .isNotEmpty();

    }



    @Test
    void shouldFindClientByEmail() {


        Client client =
                createClient("email@test.com");


        clientRepository.save(client);



        Client result =
                clientRepository
                        .findByEmail("email@test.com")
                        .orElse(null);



        assertThat(result)
                .isNotNull();


        assertThat(result.getEmail())
                .isEqualTo("email@test.com");

    }



    @Test
    void shouldDeleteClient() {


        Client client =
                createClient("delete@test.com");


        Client saved =
                clientRepository.save(client);



        clientRepository.deleteById(
                saved.getId()
        );



        assertThat(
                clientRepository.findById(saved.getId())
        )
        .isEmpty();

    }


}