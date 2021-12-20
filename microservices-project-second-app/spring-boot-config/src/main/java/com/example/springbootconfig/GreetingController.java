package com.example.springbootconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class GreetingController {

    @Value("${my.greeting: fallback default value}") // after ":" => is value if variable does not exist
    private String greetingMessage;

    @Value("some message")
    private String staticMessage; // variable will be "some message"

    @Value("${my.list.values}")
    private List<String> listValues;

    @Autowired
    private DbSettings dbSettings;

    @Autowired
    private Environment env;

   /* @Value("#{${dbValues}}") # before is to say it's an object
    private Map<String, String> dbValues; */

    @GetMapping("/greeting")
    public String greeting() {
        return dbSettings.getConnection() + dbSettings.getHost();
    }

    @GetMapping("/envdetails")
    public String envDetails() {
        return env.toString();
    }
}
