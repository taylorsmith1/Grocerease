package com.grocerease.app.repository;

import com.grocerease.app.model.Items;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Items, String> {
    Items findByProductName(String productName);

    Items findByItemNumber(String itemNumber);
}
