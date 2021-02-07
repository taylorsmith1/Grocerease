package com.grocerease.app.service;

import com.grocerease.app.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
