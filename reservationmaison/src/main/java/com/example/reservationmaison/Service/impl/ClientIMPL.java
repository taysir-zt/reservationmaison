package com.example.reservationmaison.Service.impl;

import com.example.reservationmaison.Model.Client;
import com.example.reservationmaison.Repository.ClientRepo;
import com.example.reservationmaison.Service.ClientService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientIMPL implements ClientService {
    @Autowired
    private ClientRepo clientRepo;

    public List<Client> listclient() {
        return clientRepo.findAll();
    }


    @Override
    public Client addClient(Client clt) {
        return clientRepo.save(clt);
    }


    public Optional<Client> findByEmail(String email) {
        return clientRepo.findByEmail(email);
    }
}
