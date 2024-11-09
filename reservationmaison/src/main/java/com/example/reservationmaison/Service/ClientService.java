package com.example.reservationmaison.Service;

import com.example.reservationmaison.Model.Client;

import java.util.List;

public interface ClientService {
    public Client addClient(Client clt);
    public List<Client> listclient ();
}
