package com.grocerease.app.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "purchased_items")
public class Items {
    @Id
    @GeneratedValue
    @Column(name = "item_number", nullable = false)
    private Integer itemNumber;

    private int available;

    private String brand;

    private String category;

    @Column(name = "purchase_date")
    private Date purchaseDate;

    @Column(name = "item_description")
    private String itemDescription;

    private String gtin;

    private double price;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "image_url")
    private String imageUrl;

    private Date expiration;

    private String username;

    @Column(name = "purchase_location")
    private String purchaseLocation;

    public Integer getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(Integer item_number) {
        this.itemNumber = item_number;
    }

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchase_date) {
        this.purchaseDate = purchase_date;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String item_description) {
        this.itemDescription = item_description;
    }

    public String getGtin() {
        return gtin;
    }

    public void setGtin(String gtin) {
        this.gtin = gtin;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String product_name) {
        this.productName = product_name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String image_url) {
        this.imageUrl = image_url;
    }

    public Date getExpiration() {
        return expiration;
    }

    public void setExpiration(Date expiration) {
        this.expiration = expiration;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPurchaseLocation() {
        return purchaseLocation;
    }

    public void setPurchaseLocation(String purchase_location) {
        this.purchaseLocation = purchase_location;
    }
}
