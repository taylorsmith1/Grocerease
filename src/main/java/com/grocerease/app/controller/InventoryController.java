package com.grocerease.app.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class InventoryController {

    @GetMapping({"/", "/welcome"})
    public String welcome(Model model) {
        System.out.println("Welcome was run");
        return "welcome";
    }

    @PostMapping("/v1/login")
    public String login(Model model) {
        System.out.println("Login was run");
        return "welcome";
    }
}
