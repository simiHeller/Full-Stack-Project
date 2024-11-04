package com.javatpoint.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Rent {
    @Id
    @GeneratedValue
    private Long id;

    private LocalDate lendingDate;
    private LocalDate returnDate;

    @ManyToOne
    private Dress dress;
    @ManyToOne
    private User user;
    //קשר לטבלת שמלות
    //קשר לטבלת משתמשים


    public Rent() {
    }

    public Rent(Long id, LocalDate lendingDate, LocalDate returnDate, Dress dress, User user) {
        this.id = id;
        this.lendingDate = lendingDate;
        this.returnDate = returnDate;
        this.dress = dress;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getLendingDate() {
        return lendingDate;
    }

    public void setLendingDate(LocalDate lendingDate) {
        this.lendingDate = lendingDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Dress getDress() {
        return dress;
    }

    public void setDress(Dress dress) {
        this.dress = dress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
