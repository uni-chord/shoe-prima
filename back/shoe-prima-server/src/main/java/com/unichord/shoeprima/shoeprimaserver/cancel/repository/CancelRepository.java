package com.unichord.shoeprima.shoeprimaserver.cancel.repository;

import com.unichord.shoeprima.shoeprimaserver.cancel.model.Cancel;
import com.unichord.shoeprima.shoeprimaserver.cancel.model.CancelDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CancelRepository extends JpaRepository<Cancel, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.cancel.model.CancelDto.Summary(
            c.id,
            c.orderDetailId,
            c.cancelCause,
            c.createdAt)
        FROM Cancel c
        WHERE c.id = :id
    """)
    Optional<CancelDto.Summary> findCancelDtoById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.cancel.model.CancelDto.Summary(
            c.id,
            c.orderDetailId,
            c.cancelCause,
            c.createdAt)
        FROM Cancel c
        WHERE c.orderDetailId = :orderDetailId
    """)
    Optional<CancelDto.Summary> findCancelDtoByOrderDetailId(@Param("orderDetailId") Long orderDetailId);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.cancel.model.CancelDto.Summary(
            c.id,
            c.orderDetailId,
            c.cancelCause,
            c.createdAt)
        FROM Cancel c
        JOIN OrderDetail od ON c.orderDetailId = od.id
        JOIN Order o ON od.orderId = o.id
        WHERE o.userId = :userId
    """)
    List<CancelDto.Summary> findCancelDtoByUserId(@Param("userId") Long userId);
}