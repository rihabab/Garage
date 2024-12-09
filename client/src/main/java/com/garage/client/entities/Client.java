package com.garage.client.entities;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.io.Serializable;


@Entity
@Table(name = "clients")
public class Client implements Serializable {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key

    @Column(name = "id_number", nullable = false, unique = true)
    private String identityNumber; // Numéro de pièce d'identité

    @Column(name = "last_name", nullable = false)
    private String lastName; // Nom du client

    @Column(name = "first_name", nullable = false)
    private String firstName; // Prénom du client

    @Column(name = "address", nullable = false)
    private String address; // Adresse complète

    @Column(name = "phone", nullable = false, unique = true)
    private String phone; // Téléphone

    @Column(name = "email", nullable = false, unique = true)
    private String email; // Email

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdentityNumber() {
        return identityNumber;
    }

    public void setIdentityNumber(String identityNumber) {
        this.identityNumber = identityNumber;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }




}
