package org.example.testing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
//@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@SpringBootApplication
@ConfigurationPropertiesScan
public class TestingApplication {
    public static void main(String[] args) {
        SpringApplication.run(TestingApplication.class, args);
    }
}
