package com.javatpoint.service;

import com.javatpoint.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category,Long> {
  public List<Category> findCategoryByName(String name);
//  public List<Category> findCategoryById(Number id);
  public List<Category> findCategoryByDescraption(String descraption);


}
