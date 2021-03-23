package com.grocerease.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grocerease.app.model.Items;
import com.grocerease.app.model.Purchases;
import com.grocerease.app.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("v1/purchase_history")
    public Purchases history() {
        return null;
    }

    @PostMapping("/v1/put_item")
    public String postItem(@RequestBody Items item) {
        try {
            this.inventoryService.saveItem(item);
            return "Saved!";
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return "Not saved - Exception is: " + exception.getMessage();
        }
    }

    @PostMapping("/v1/put_purchase")
    public String postPurchase(@RequestBody Purchases purchases) {
        try {
            this.inventoryService.savePurchase(purchases);
            return "Saved!";
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return "Not saved - Exception is: " + exception.getMessage();
        }
    }
}
