package com.javatpoint.controller;


import com.javatpoint.model.User;
import com.javatpoint.service.UserRepository;
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
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        Optional<User> u = userRepository.findById(id);
        return u.map(item -> ResponseEntity.ok().body(item))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/bypass/{password}")
    public ResponseEntity<?> getUserByPassword(@PathVariable String password) {
        Optional<User> u = Optional.ofNullable(userRepository.findUserByPassword(password));
        return u.map(item -> ResponseEntity.ok().body(item))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User u) throws URISyntaxException {
        User newUser = userRepository.save(u);
        return ResponseEntity.created(new URI("/api/user" + newUser.getId())).body(newUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> UpdateUser(@PathVariable Long id, @RequestBody User u) throws URISyntaxException {
        if (id != u.getId())
            return ResponseEntity.badRequest().build();
        User updateUser = userRepository.save(u);
        return ResponseEntity.created(new URI("/api/user/" + updateUser.getId())).body(updateUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}