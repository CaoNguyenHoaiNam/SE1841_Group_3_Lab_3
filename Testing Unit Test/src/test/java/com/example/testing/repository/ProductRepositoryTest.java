package com.example.testing.repository;

import org.example.testing.entities.Product;
import org.example.testing.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
@ComponentScan(basePackages = "org.example.testing.repositories")
@EnableJpaRepositories(basePackages = "org.example.testing.repositories")
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    void findById() {
        Product product = new Product();
        product.setProductName("Test Product");
        product.setPrice(100.0);
        productRepository.save(product);

        Optional<Product> foundProduct = productRepository.findById(product.getProductId());
        assertTrue(foundProduct.isPresent());
        assertEquals("Test Product", foundProduct.get().getProductName());
        assertEquals(100.0, foundProduct.get().getPrice());
    }

    @Test
    void saveAndFindProduct() {
        Product product = new Product();
        product.setProductName("Another Test Product");
        product.setPrice(250.0);

        Product savedProduct = productRepository.save(product);
        Optional<Product> retrievedProduct = productRepository.findById(savedProduct.getProductId());

        assertTrue(retrievedProduct.isPresent());
        assertEquals("Another Test Product", retrievedProduct.get().getProductName());
        assertEquals(250.0, retrievedProduct.get().getPrice());
    }
}