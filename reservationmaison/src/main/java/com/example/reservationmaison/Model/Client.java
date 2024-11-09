package com.example.reservationmaison.Model;

import jakarta.persistence.*;

@Entity
@Table(name="client")
public class Client {

    @Id
    @Column(name="client_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int client_id;


    @Column(name = "client_name", length = 45)
    private String client_name;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "adresse", length = 50)
    private String adresse;

    @Column(name = "telephone", length = 8)
    private int telephone;

    @Column(name = "password", length = 50)
    private String password;

    public Client(String password, int client_id, String client_name, String email, String adresse, int telephone) {
        this.password = password;
        this.client_id = client_id;
        this.client_name = client_name;
        this.email = email;
        this.adresse = adresse;
        this.telephone = telephone;
    }

    public Client() {}

    public int getClient_id() {
        return client_id;
    }

    public String getClient_name() {
        return client_name;
    }

    public String getEmail() {
        return email;
    }

    public String getAdresse() {
        return adresse;
    }

    public int getTelephone() {
        return telephone;
    }

    public String getPassword() {
        return password;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }

    public void setClient_name(String client_name) {
        this.client_name = client_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
