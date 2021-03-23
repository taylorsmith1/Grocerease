package com.grocerease.app.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "purchases")
public class Purchases {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer uniqueId;

    private String username;

    private Date datePurchased;

    private int quantityPurchased;

    @ManyToMany
    private Set<Items> items;

    public Integer getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Integer uniqueId) {
        this.uniqueId = uniqueId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDatePurchased() {
        return datePurchased;
    }

    public void setDatePurchased(Date date_purchased) {
        this.datePurchased = date_purchased;
    }

    public int getQuantityPurchased() {
        return quantityPurchased;
    }

    public void setQuantityPurchased(int quantity_purchased) {
        this.quantityPurchased = quantity_purchased;
    }

    public Set<Items> getItems() {
        return items;
    }

    public void setItems(Set<Items> items) {
        this.items = items;
    }
}
