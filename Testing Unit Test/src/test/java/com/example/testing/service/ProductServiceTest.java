package com.example.testing.service;

import org.example.testing.entities.Product;
import org.example.testing.repositories.ProductRepository;
import org.example.testing.services.ProductService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllProducts() {
        when(productRepository.findAll()).thenReturn(Arrays.asList(new Product(), new Product()));

        assertEquals(2, productService.getAllProducts().size());

        verify(productRepository, times(1)).findAll();
    }

    @Test
    void getProductById() {
        // Mock data
        Product product = new Product();
        product.setProductId(1);
        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        // Test
        assertEquals(product, productService.getProductById(1).orElseThrow(() -> new RuntimeException("Product not found")));

        // Verify
        verify(productRepository, times(1)).findById(1);
    }

    @Test
    void createProduct() {
        // Mock data
        Product product = new Product();
        when(productRepository.save(product)).thenReturn(product);

        // Test
        assertEquals(product, productService.createProduct(product));

        // Verify
        verify(productRepository, times(1)).save(product);
    }

    @Test
    void updateProduct() {
        // Mock data
        Product product = new Product();
        product.setProductId(1);
        when(productRepository.findById(1)).thenReturn(Optional.of(product));
        when(productRepository.save(product)).thenReturn(product);

        // Test
        assertEquals(product, productService.updateProduct(1, product));

        // Verify
        verify(productRepository, times(1)).findById(1);
        verify(productRepository, times(1)).save(product);
    }

    @Test
    void deleteProduct() {
        // Mock behavior
        doNothing().when(productRepository).deleteById(1);

        // Test
        productService.deleteProduct(1);

        // Verify
        verify(productRepository, times(1)).deleteById(1);
    }
}