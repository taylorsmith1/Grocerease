package com.grocerease.app.service;

import com.grocerease.app.model.Items;

import java.util.Date;
import java.util.Set;

public interface InventoryService {

    void saveItem(Items item);

    Items findItemByName(String name);

    Items findItemByNumber(String number);

    Set<Items> findByPurchaseLocationLike(String purchaseLocation);

    Set<Items> findFirst10ByOrOrderByPurchaseDateDesc();

    Set<Items> findAllByPurchaseDate(Date date);

    Set<Items> findAllByBrandLike(String brand);

    Set<Items> findAllByUsernameLike(String username);
}
