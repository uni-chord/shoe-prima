package com.unichord.shoeprima.shoeprimaserver.inventory.repository;

import com.unichord.shoeprima.shoeprimaserver.inventory.model.Inventory;
import com.unichord.shoeprima.shoeprimaserver.inventory.model.InventoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.inventory.model.InventoryDto.Summary(
            i.id, 
            i.productId, 
            i.size, 
            i.productQnt, 
            i.createdAt) 
        FROM Inventory i 
        WHERE i.id = :id
    """)
    Optional<InventoryDto.Summary> findInventoryDtoById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.inventory.model.InventoryDto.Summary(
            i.id, 
            i.productId, 
            i.size, 
            i.productQnt, 
            i.createdAt) 
        FROM Inventory i 
        WHERE i.productId = :productId
    """)
    List<InventoryDto.Summary> findInventoryDtoByProductId(@Param("productId") Long productId);
    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.inventory.model.InventoryDto.Summary(
            i.id, 
            i.productId, 
            i.size, 
            i.productQnt, 
            i.createdAt) 
        FROM Inventory i 
        WHERE i.productId = :productId AND i.size = :size
    """)
    List<InventoryDto.Summary> findInventoryDtoByProductIdAndSize(@Param("productId") Long productId, @Param("size") String size);

}
