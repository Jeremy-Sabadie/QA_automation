package com.example.qa_automation_backend.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.qa_automation_backend.entity.Client;
import com.example.qa_automation_backend.service.ClientService;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest(controllers = ClientController.class)
public class ClientControllerTest {


    @Autowired
    private MockMvc mockMvc;


    @MockBean
    private ClientService clientService;


    @Autowired
    private ObjectMapper objectMapper;



    private Client createClient() {

        Client client = new Client();

        client.setId(1L);
        client.setFirstName("Jean");
        client.setLastName("Dupont");
        client.setEmail("jean@test.com");

        return client;
    }



    @Test
    void shouldGetAllClients() throws Exception {


        when(clientService.findAll())
                .thenReturn(List.of(createClient()));


        mockMvc.perform(get("/api/clients"))

                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].firstName")
                        .value("Jean"))
                .andExpect(jsonPath("$[0].email")
                        .value("jean@test.com"));

    }



    @Test
    void shouldGetClientById() throws Exception {


        when(clientService.findById(1L))
                .thenReturn(Optional.of(createClient()));


        mockMvc.perform(get("/api/clients/1"))

                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName")
                        .value("Jean"))
                .andExpect(jsonPath("$.email")
                        .value("jean@test.com"));

    }



    @Test
    void shouldCreateClient() throws Exception {


        Client client = createClient();


        when(clientService.save(any(Client.class)))
                .thenReturn(client);


        mockMvc.perform(post("/api/clients")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(client)))


                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName")
                        .value("Jean"))
                .andExpect(jsonPath("$.email")
                        .value("jean@test.com"));

    }



    @Test
    void shouldUpdateClient() throws Exception {


        Client client = createClient();


        client.setFirstName("JeanUpdated");


        when(clientService.findById(1L))
                .thenReturn(Optional.of(createClient()));


        when(clientService.save(any(Client.class)))
                .thenReturn(client);



        mockMvc.perform(put("/api/clients/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(client)))


                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName")
                        .value("JeanUpdated"))
                .andExpect(jsonPath("$.email")
                        .value("jean@test.com"));



        verify(clientService)
                .save(any(Client.class));

    }



    @Test
    void shouldDeleteClient() throws Exception {


        doNothing()
                .when(clientService)
                .deleteById(1L);



        mockMvc.perform(delete("/api/clients/1"))

                .andExpect(status().isNoContent());



        verify(clientService)
                .deleteById(1L);

    }

}