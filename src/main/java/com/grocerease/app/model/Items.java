package com.grocerease.app.model;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Set;

@Entity
@Table(name = "items2")
public class Items {
    @Id
    @GeneratedValue
    private Integer itemNumber;

    private String crawlTimestamp;

    private String productUrl;

    private String productName;

    private String description;

    private double listPrice;

    private double salePrice;

    private String brand;

    private BigInteger gtin;

    private String packageSize;

    private String category;

    private String postalCode;

    private String available;

    @ManyToMany
    private Set<Purchases> purchases;

    public String getCrawlTimestamp() {
        return crawlTimestamp;
    }

    public void setCrawlTimestamp(String crawl_timestamp) {
        this.crawlTimestamp = crawl_timestamp;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public void setProductUrl(String product_url) {
        this.productUrl = product_url;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String product_name) {
        this.productName = product_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getListPrice() {
        return listPrice;
    }

    public void setListPrice(double list_price) {
        this.listPrice = list_price;
    }

    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double sale_price) {
        this.salePrice = sale_price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(Integer item_number) {
        this.itemNumber = item_number;
    }

    public BigInteger getGtin() {
        return gtin;
    }

    public void setGtin(BigInteger gtin) {
        this.gtin = gtin;
    }

    public String getPackageSize() {
        return packageSize;
    }

    public void setPackageSize(String package_size) {
        this.packageSize = package_size;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postal_code) {
        this.postalCode = postal_code;
    }

    public String getAvailable() {
        return available;
    }

    public void setAvailable(String available) {
        this.available = available;
    }

    public Set<Purchases> getPurchases() {
        return purchases;
    }

    public void setPurchases(Set<Purchases> purchases) {
        this.purchases = purchases;
    }
}
