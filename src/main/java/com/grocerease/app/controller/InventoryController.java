package com.grocerease.app.controller;

import com.grocerease.app.model.Items;
import com.grocerease.app.model.Purchases;
import com.grocerease.app.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Set;

@CrossOrigin
@RestController
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

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

    @GetMapping("/v1/get_name/{name}")
    public Items getByItemName(@PathVariable String name) {
        try {
            return this.inventoryService.findItemByName(name);
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            throw new ResourceAccessException("Yo you messed up the name");
        }
    }

    @GetMapping("/v1/get_number/{number}")
    public Items getByItemNumber(@PathVariable("number") String number) {
        try {
            return this.inventoryService.findItemByNumber(number);
        }  catch (Exception exception) {
            System.out.println(exception.getMessage());
            throw new ResourceAccessException("Yo you messed up the number");
        }
    }

    @GetMapping("/v1/get_username/{username}")
    public Set<Purchases> getByUserPurchased(@PathVariable String username) {
        try {
            return this.inventoryService.findPurchasesByUsername(username);
        }  catch (Exception exception) {
            System.out.println(exception.getMessage());
            throw new ResourceAccessException("Yo you messed up the username");
        }
    }

    @GetMapping("/v1/get_date/{date}")
    public Set<Purchases> getByDatePurchased(@PathVariable String date) {
        try {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
            Date input = formatter.parse(date);
            return this.inventoryService.findPurchasesByDate(input);
        }  catch (Exception exception) {
            System.out.println(exception.getMessage());
            throw new ResourceAccessException("Yo you messed up the date");
        }
    }
}
