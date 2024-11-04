package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String descraption ;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List <Dress> listDress;
    //קשר לטבלת שמלות
    public Category() {

    }
    public Category(Long id, String name, String descraption) {
        this.id = id;
        this.name = name;
        this.descraption = descraption;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescraption() {
        return descraption;
    }

    public void setDescraption(String descraption) {
        this.descraption = descraption;
    }

    public List<Dress> getListDress() {
        return listDress;
    }

    public void setListDress(List<Dress> listDress) {
        this.listDress = listDress;
    }

}
