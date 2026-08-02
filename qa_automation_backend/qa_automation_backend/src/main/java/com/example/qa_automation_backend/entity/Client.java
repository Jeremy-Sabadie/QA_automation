package com.example.qa_automation_backend.entity;


import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


/**
 * Entité représentant un client enregistré dans l'application.
 *
 * Cette classe est directement liée à la table "client"
 * de la base MariaDB via JPA/Hibernate.
 *
 * Les annotations JPA permettent à Hibernate de gérer
 * automatiquement le mapping objet/relationnel.
 *
 * @author Jérémy Sabadie
 */
@Entity
@Table(name = "client")
public class Client {


    /**
     * Identifiant technique unique du client.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    /**
     * Prénom du client.
     */
    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;


    /**
     * Nom du client.
     */
    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;


    /**
     * Adresse email unique du client.
     */
    @Column(name = "email", nullable = false, unique = true)
    private String email;


    /**
     * Numéro de téléphone du client.
     */
    @Column(name = "phone", length = 20)
    private String phone;


    /**
     * Date de naissance du client.
     */
    @Column(name = "birth_date")
    private LocalDate birthDate;


    /**
     * Adresse postale du client.
     */
    @Column(name = "address")
    private String address;


    /**
     * Code postal.
     */
    @Column(name = "postal_code", length = 10)
    private String postalCode;


    /**
     * Ville.
     */
    @Column(name = "city", length = 100)
    private String city;


    /**
     * Date de création de l'enregistrement.
     */
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;


    /**
     * Date de dernière modification.
     */
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;



    /**
     * Constructeur vide obligatoire pour JPA.
     */
    public Client() {
    }



    // =========================
    // Getters / Setters
    // =========================


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getFirstName() {
        return firstName;
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }


    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public LocalDate getBirthDate() {
        return birthDate;
    }


    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getPostalCode() {
        return postalCode;
    }


    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }


    public String getCity() {
        return city;
    }


    public void setCity(String city) {
        this.city = city;
    }


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }


    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

}