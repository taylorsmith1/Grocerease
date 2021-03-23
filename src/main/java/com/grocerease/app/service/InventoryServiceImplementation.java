package com.grocerease.app.service;

import com.grocerease.app.model.Items;
import com.grocerease.app.model.Purchases;
import com.grocerease.app.repository.ItemRepository;
import com.grocerease.app.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class InventoryServiceImplementation implements InventoryService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public void saveItem(Items item) {
        itemRepository.save(item);
    }

    @Override
    public void savePurchase(Purchases purchase) {
        purchaseRepository.save(purchase);
    }

    @Override
    public Items findItemByName(String name) {
        return this.itemRepository.findByProductName(name);
    }

    @Override
    public Items findItemByNumber(String number) {
        return this.itemRepository.findByItemNumber(number);
    }

    @Override
    public Set<Purchases> findPurchasesByUsername(String username) {
        return new HashSet<>(this.purchaseRepository.findAllByUsername(username));
    }

    @Override
    public Set<Purchases> findPurchasesByDate(Date date) {
        return new HashSet<>(this.purchaseRepository.findAllByDatePurchased(date));
    }
}
