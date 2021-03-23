package com.grocerease.app.service;

import com.grocerease.app.model.Items;
import com.grocerease.app.model.Purchases;

import java.util.Date;
import java.util.Set;

public interface InventoryService {

    void saveItem(Items item);

    void savePurchase(Purchases purchase);

    Items findItemByName(String name);

    Items findItemByNumber(String number);

    Set<Purchases> findPurchasesByUsername(String username);

    Set<Purchases> findPurchasesByDate(Date date);
}
