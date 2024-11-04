package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Dress {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String color;
    private String fubricType;
    private double price;
    private String image;//"dress1.jpg"
    @ManyToOne
    private Category category;
    @ManyToOne
    private Rent rent;
    @JsonIgnore
    @OneToMany(mappedBy = "dress")
    private List<Rent> rentList;
    //קשר לטבלת קטגוריה
    //קשר לטבלת השכרות


    public Dress() {
    }

    public Dress(Long id, String title, String color, String fubricType, double price, String image, Category category, Rent rent, List<Rent> rentList) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.fubricType = fubricType;
        this.price = price;
        this.image = image;
        this.category = category;
        this.rent = rent;
        this.rentList = rentList;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Rent getRent() {
        return rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }

    public List<Rent> getRentList() {
        return rentList;
    }

    public void setRentList(List<Rent> rentList) {
        this.rentList = rentList;
    }
}
