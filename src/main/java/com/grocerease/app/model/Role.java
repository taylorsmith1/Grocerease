package com.grocerease.app.model;

import javax.persistence.*;
import java.util.Set;

// @Entity is a JPA annotation which specifies the class as an entity (so the class name can be used in JPQL queries)
@Entity
// @Table annotation with the name attribute specifies the table name in the underlying database for the annotated entity. If no @Table is defined, the class name of the entity will be used as the table name
@Table(name = "role")
public class Role {
    //@Id declares the identifier property of the entity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    //@ManyToMany defines a many-to-many relationship between 2 entities
    //mappedBy indicates the entity is the inverse of the relationship
    @ManyToMany(mappedBy = "roles")
    private Set<User> users;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
