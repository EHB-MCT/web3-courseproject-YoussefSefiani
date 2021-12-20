package com.example.demo.customer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class CustomerServiceTest {

    @Autowired
    private CustomerRepository customerRepository;
    private CustomerService underTest;

    @BeforeEach
    void setUp() {
        underTest = new CustomerService(customerRepository);
    }

    @AfterEach
    void tearDown() {
        customerRepository.deleteAll();
    }

    @Test
    void getCustomers() {
        //given
        Customer youssef = new Customer(1L, "youssef", "hello", "youssef@gmail.com");
        Customer ben = new Customer(2L, "ben", "hello", "ben@gmail.com");


        customerRepository.saveAll(Arrays.asList(youssef, ben));
        //when
       List<Customer> customers = underTest.getCustomers();

       //then
       assertEquals(2, customers.size());
    }

    @Test
    void getCustomer() {
        //given
        Customer youssef = new Customer(1L, "youssef", "hello", "youssef@gmail.com");
        customerRepository.save(youssef);

        //when
        Customer actual = underTest.getCustomer(1L);

        //then
        assertEquals(1L, actual.getId());
        assertEquals("youssef", actual.getName());
        assertEquals("hello", actual.getPassword());
        assertEquals("youssef@gmail.com", actual.getEmail());
    }
}