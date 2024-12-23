package com.example.reservationmaison.Repository;

import com.example.reservationmaison.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface ClientRepo extends JpaRepository<Client, Long> {

        Optional<Client> findByEmail(String email);

}