package com.unichord.shoeprima.shoeprimaserver.product.repository;


import com.unichord.shoeprima.shoeprimaserver.product.model.Product;
import com.unichord.shoeprima.shoeprimaserver.product.model.ProductDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.product.model.ProductDto.Summary(
            p.id, 
            p.modelCode, 
            p.name, 
            p.price, 
            p.color) 
        FROM Product p 
        WHERE p.id = :id
    """)
    Optional<ProductDto.Summary> findProductDtoSummaryById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.product.model.ProductDto.Summary(
            p.id, 
            p.modelCode, 
            p.name, 
            p.price, 
            p.color) 
        FROM Product p
    """)
    List<ProductDto.Summary> findAllProductDtoSummary();

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.product.model.ProductDto.Summary(
            p.id, 
            p.modelCode, 
            p.name, 
            p.price, 
            p.color) 
        FROM Product p 
        ORDER BY p.price ASC
    """)
    List<ProductDto.Summary> findAllProductDtoSummaryByOrderPriceAsc();
}
