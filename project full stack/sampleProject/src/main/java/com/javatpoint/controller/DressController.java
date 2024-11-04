package com.javatpoint.controller;


//import com.javatpoint.dto.DressDTO;
import com.javatpoint.model.Dress;
import com.javatpoint.service.DressRepository;
import com.javatpoint.service.MapStructMapper;
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
@RequestMapping("/api/dress")
public class DressController {
    private final DressRepository dressRepository;
    private final MapStructMapper mapStructMapper;
    @Autowired
    public DressController(DressRepository dressRepository,MapStructMapper mapStructMapper) {
        this.dressRepository = dressRepository;
        this.mapStructMapper=mapStructMapper;
    }
    @GetMapping("/dresses")
    public List<Dress> getAllDress(){
        return dressRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getDress(@PathVariable Long id){
        Optional<Dress> d = dressRepository.findById(id);
        return d.map(item -> ResponseEntity.ok().body(item))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping
    public ResponseEntity<Dress> createDress(@RequestBody Dress d) throws URISyntaxException {
        Dress newDress=dressRepository.save(d);
        return ResponseEntity.created(new URI("/api/dress"+newDress.getId())).body(newDress);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> UpdateDress(@PathVariable Long id,@RequestBody Dress d) throws URISyntaxException {
        if(id!=d.getId())
            return ResponseEntity.badRequest().build();
        Dress updateDress=dressRepository.save(d);
        return ResponseEntity.created(new URI("/api/dress/"+updateDress.getId())).body(updateDress);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDress(@PathVariable Long id)
    {
        dressRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}
