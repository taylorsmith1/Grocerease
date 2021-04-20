package com.grocerease.app.service;

import com.grocerease.app.model.Items;
import com.grocerease.app.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class InventoryServiceImplementation implements InventoryService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public void saveItem(Items item) {
        itemRepository.save(item);
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
    public Set<Items> findByPurchaseLocationLike(String purchaseLocation) {
        return new HashSet<>(this.itemRepository.findByPurchaseLocationLike(purchaseLocation));
    }

    @Override
    public Set<Items> findFirst10ByOrOrderByPurchaseDateDesc() {
        return new HashSet<>(this.itemRepository.findFirst10ByOrderByPurchaseDateDesc());
    }

    @Override
    public Set<Items> findAllByPurchaseDate(Date date) {
        return new HashSet<>(this.itemRepository.findAllByPurchaseDate(date));
    }

    @Override
    public Set<Items> findAllByBrandLike(String brand) {
        return new HashSet<>(this.itemRepository.findAllByBrandLike(brand));
    }

    @Override
    public Set<Items> findAllByUsernameLike(String username) {
        return new HashSet<>(this.itemRepository.findAllByUsernameLike(username));
    }


}
