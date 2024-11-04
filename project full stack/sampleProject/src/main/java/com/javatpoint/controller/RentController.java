package com.javatpoint.controller;


import com.javatpoint.model.Rent;
import com.javatpoint.service.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.convert.PeriodUnit;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/rent")
public class RentController {
    private final RentRepository rentRepository;

    @Autowired
    public RentController(RentRepository rentRepository) {
        this.rentRepository = rentRepository;
    }

    @GetMapping("/rents")
    public List<Rent> getAllRent() {
        return rentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRent(@PathVariable Long id) {
        Optional<Rent> r = rentRepository.findById(id);
        return r.map(item -> ResponseEntity.ok().body(item))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Rent> createRent(@RequestBody Rent r) throws URISyntaxException {
        Rent newRent = rentRepository.save(r);
        return ResponseEntity.created(new URI("/api/rent" + newRent.getId())).body(newRent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> UpdateRent(@PathVariable Long id, @RequestBody Rent r) throws URISyntaxException {
        if (id != r.getId())
            return ResponseEntity.badRequest().build();
        Rent updateRent = rentRepository.save(r);
        return ResponseEntity.created(new URI("/api/rent/" + updateRent.getId())).body(updateRent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRent(@PathVariable Long id) {
        rentRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}