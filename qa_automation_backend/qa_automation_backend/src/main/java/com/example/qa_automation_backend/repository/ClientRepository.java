package com.example.qa_automation_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.qa_automation_backend.entity.Client;


/**
 * Repository permettant la gestion de la persistance des clients.
 *
 * Cette interface délègue les opérations CRUD standards
 * à Spring Data JPA.
 *
 * Hibernate se charge du mapping entre l'entité Client
 * et la table "client" en base MariaDB.
 *
 * @author Jérémy Sabadie
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {


}