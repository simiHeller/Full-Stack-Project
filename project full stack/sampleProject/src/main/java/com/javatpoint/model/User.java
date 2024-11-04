package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;


@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String mail;
    private int status;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Rent> rentUserList;
    //קשר לטבלת השכרות


    public User() {
    }

    public User(Long id, String password, String firstName, String lastName, String phoneNumber, String mail, int status) {
        this.id = id;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<Rent> getRentUserList() {
        return rentUserList;
    }

    public void setRentUserList(List<Rent> rentUserList) {
        this.rentUserList = rentUserList;
    }
}
