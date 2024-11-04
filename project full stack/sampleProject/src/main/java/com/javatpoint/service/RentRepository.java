package com.javatpoint.service;

import com.javatpoint.model.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentRepository extends JpaRepository<Rent,Long> {
    //לבדוק איך עושים את זה?
}
