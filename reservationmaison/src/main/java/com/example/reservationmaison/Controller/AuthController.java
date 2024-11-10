package com.example.reservationmaison.Controller;
import com.example.reservationmaison.Model.Client;
import com.example.reservationmaison.Service.impl.ClientIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/v1/Client")

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




    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Client clientRequest) {
        Optional<Client> client = clientimp.findByEmail(clientRequest.getEmail());

        if (client.isPresent() && client.get().getPassword().equals(clientRequest.getPassword())) {
            return ResponseEntity.ok().body("{\"message\": \"Login Success\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Incorrect Email and Password not match\"}");
        }
    }




}
