package com.example.testing.controller;

import org.example.testing.controller.ProductController;
import org.example.testing.entities.Product;
import org.example.testing.services.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ProductControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllProducts() {
        List<Product> products = Arrays.asList(new Product(), new Product());
        when(productService.getAllProducts()).thenReturn(products);
        ResponseEntity<List<Product>> response = productController.getAllProducts();
        assertEquals(2, Objects.requireNonNull(response.getBody()).size());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(productService, times(1)).getAllProducts();
    }

    @Test
    void getProductById() {
        Product product = new Product();
        product.setProductId(1);
        when(productService.getProductById(1)).thenReturn(Optional.of(product));
        ResponseEntity<Product> response = productController.getProductById(1);
        assertEquals(product, response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(productService, times(1)).getProductById(1);
    }

    @Test
    void createProduct() {
        Product product = new Product();
        when(productService.createProduct(product)).thenReturn(product);
        ResponseEntity<Product> response = productController.createProduct(product);
        assertEquals(product, response.getBody());
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        verify(productService, times(1)).createProduct(product);
    }

    @Test
    void updateProduct() {
        Product product = new Product();
        product.setProductId(1);
        when(productService.updateProduct(1, product)).thenReturn(product);
        ResponseEntity<Product> response = productController.updateProduct(1, product);
        assertEquals(product, response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(productService, times(1)).updateProduct(1, product);
    }

    @Test
    void deleteProduct() {
        doNothing().when(productService).deleteProduct(1);
        ResponseEntity<Void> response = productController.deleteProduct(1);
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(productService, times(1)).deleteProduct(1);
    }
}