package com.javatpoint.service;

import com.javatpoint.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
public User findUserByPassword(String password);
}
