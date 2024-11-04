package com.javatpoint.controller;


import com.javatpoint.model.Category;
import com.javatpoint.service.CategoryRepository;
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
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categorys")
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategory(@PathVariable Long id) {
        Optional<Category> c = categoryRepository.findById(id);
        return c.map(item -> ResponseEntity.ok().body(item))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category c) throws URISyntaxException {
        Category newCategory = categoryRepository.save(c);
        return ResponseEntity.created(new URI("/api/category" + newCategory.getId())).body(newCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> UpdateCategory(@PathVariable Long id, @RequestBody Category c) throws URISyntaxException {
        if (id != c.getId())
            return ResponseEntity.badRequest().build();
        Category updateCategory = categoryRepository.save(c);
        return ResponseEntity.created(new URI("/api/category/" + updateCategory.getId())).body(updateCategory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}