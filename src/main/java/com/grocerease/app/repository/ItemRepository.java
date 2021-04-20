package com.grocerease.app.repository;

import com.grocerease.app.model.Items;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Set;

public interface ItemRepository extends JpaRepository<Items, String> {
    Items findByProductName(String productName);

    Items findByItemNumber(String itemNumber);

    Set<Items> findByPurchaseLocationLike(String purchaseLocation);

    Set<Items> findFirst10ByOrderByPurchaseDateDesc();

    Set<Items> findAllByPurchaseDate(Date date);

    Set<Items> findAllByBrandLike(String brand);

    Set<Items> findAllByUsernameLike(String username);
}
