package com.grocerease.app.repository;

import com.grocerease.app.model.Purchases;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Set;

public interface PurchaseRepository extends JpaRepository<Purchases, String> {
    Set<Purchases> findAllByUsername(String username);

    Set<Purchases> findAllByDatePurchased(Date date);
}
