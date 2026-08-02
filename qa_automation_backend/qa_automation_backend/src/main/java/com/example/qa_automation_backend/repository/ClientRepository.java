package com.example.qa_automation_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.qa_automation_backend.entity.Client;


/**
 * Repository permettant l'accès aux données des clients.
 *
 * Cette couche utilise Spring Data JPA afin de fournir
 * automatiquement les opérations CRUD standards.
 *
 * Des méthodes spécifiques peuvent être ajoutées pour
 * répondre aux besoins métier.
 *
 * @author Jérémy Sabadie
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {


    /**
     * Recherche un client à partir de son adresse email.
     *
     * @param email email du client recherché
     * @return client trouvé ou Optional vide
     */
    Optional<Client> findByEmail(String email);

}