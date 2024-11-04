package com.javatpoint.service;

import com.javatpoint.model.Dress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DressRepository extends JpaRepository<Dress,Long> {
//    public List<Dress> findDressesByPriceBetween(Double num1, Double num2);
//    public List<Dress> findDressesByFubricType(String fubricType);
//    public List<Dress> findDressesByCategory_Color(String color);


}
