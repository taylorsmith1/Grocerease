package com.grocerease.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("/v1/registration")
//    public String registration(Model model) {
//        model.addAttribute("userForm", new User());
//
//        return "registration";
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping("/v1/registration")
//    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult) {
//        userValidator.validate(userForm, bindingResult);
//
//        if (bindingResult.hasErrors()) {
//            return "registration";
//        }
//
//        userService.save(userForm);
//
//        securityService.autoLogin(userForm.getUsername(), userForm.getPasswordConfirm());
//
//        return "redirect:/welcome";
//    }

//    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
//    @PostMapping("/v1/login")
//    public String login(Model model, String error, String logout) {
//        if (error != null)
//            model.addAttribute("error", "Your username and password is invalid.");
//
//        if (logout != null)
//            model.addAttribute("message", "You have been logged out successfully.");
//
//        return "login";
//    }
//
//    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
//    @GetMapping("/v1/login")
//    public String getlogin(Model model, String error, String logout) {
//        if (error != null)
//            model.addAttribute("error", "Your username and password is invalid.");
//
//        if (logout != null)
//            model.addAttribute("message", "You have been logged out successfully.");
//
//        return "login";
//    }
//
//    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
//    @GetMapping({"/", "/welcome"})
//    public String welcome(Model model) {
//        return "welcome";
//    }
}
