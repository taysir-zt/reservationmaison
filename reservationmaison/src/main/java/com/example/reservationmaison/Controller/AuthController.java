package com.example.reservationmaison.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/v1/Client")

public class AuthController {
    @Autowired
    private ClientService clientservice;

    @PostMapping(path = "/register")
    public String saveClient(@RequestBody ClientDTO clientDTO){

        String id = clientservice.addClient(clientDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginClient(@ResponseBody LoginDTO loginDTO){

        LoginMessage loginMessage = clientservice.loginMessage(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }


}
