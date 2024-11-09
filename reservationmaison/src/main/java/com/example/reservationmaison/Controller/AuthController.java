package com.example.reservationmaison.Controller;
import com.example.reservationmaison.Model.Client;
import com.example.reservationmaison.Service.ClientService;
import com.example.reservationmaison.Service.impl.ClientIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/Client")

public class AuthController {
    @Autowired
    private ClientIMPL clientimp;


    @GetMapping("/ListClient")
    public List<Client> getAllClient(){
        return clientimp.listclient();
    }


    @PostMapping(path = "/register")
    public Client saveClient(@RequestBody Client clt){
        return clientimp.addClient(clt);
    }




}
