package com.example.demo.customer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table
@ToString
public class Customer {

        @Id
        private Long id;

        @NotBlank(message = "name must be not empty")
        private String name;

        @NotBlank(message = "password must be not empty")
        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        private String password;

        @NotBlank(message = "email must be not empty")  //this one is actually not needed (@Blank) I think @Email already checks if not empty
        @Email//you can give custom parameters
        private String email;

        public Customer() {
        }

    public Customer(Long id, String name, String password, String email) {
            this.id = id;
            this.name = name;
            this.password = password;
            this.email = email;
        }

        @JsonProperty("customer_id")
        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        @JsonIgnore
        public String getPassword() {
            return password;
        }

        public String getEmail() {
            return email;
        }

}
