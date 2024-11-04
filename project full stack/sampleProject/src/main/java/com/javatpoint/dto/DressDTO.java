package com.javatpoint.dto;

import com.javatpoint.model.Category;
import com.javatpoint.model.Rent;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

public class DressDTO {

    private Long id;

    private String title;
    private String color;
    private String fubricType;
    private double price;
    private Long categoryId;
    private Rent rent;
    private String image;

    public DressDTO() {
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public DressDTO(Long id, String title, String color, String fubricType, double price, Long categoryId, Rent rent, String image) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.fubricType = fubricType;
        this.price = price;
        this.categoryId = categoryId;
        this.rent = rent;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getFubricType() {
        return fubricType;
    }

    public void setFubricType(String fubricType) {
        this.fubricType = fubricType;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Rent getRent() {
        return rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }
}
