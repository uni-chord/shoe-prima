package com.unichord.shoeprima.shoeprimaserver.returns.repository;

import com.unichord.shoeprima.shoeprimaserver.ReturnDto;
import com.unichord.shoeprima.shoeprimaserver.returns.model.Return;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReturnRepository extends JpaRepository<Return, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.returns.model.ReturnDto.Summary(
            r.id,
            r.orderDetailId,
            r.returnCause,
            r.returnNumber,
            r.createdAt)
        FROM Return r
        WHERE r.id = :id
    """)
    Optional<ReturnDto.Summary> findReturnDtoById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.returns.model.ReturnDto.Summary(
            r.id,
            r.orderDetailId,
            r.returnCause,
            r.returnNumber,
            r.createdAt)
        FROM Return r
        WHERE r.orderDetailId = :orderDetailId
    """)
    Optional<ReturnDto.Summary> findReturnDtoByOrderDetailId(@Param("orderDetailId") Long orderDetailId);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.returns.model.ReturnDto.Summary(
            r.id,
            r.orderDetailId,
            r.returnCause,
            r.returnNumber,
            r.createdAt)
        FROM Return r
        JOIN OrderDetail od ON r.orderDetailId = od.id
        JOIN Order o ON od.orderId = o.id
        WHERE o.userId = :userId
    """)
    List<ReturnDto.Summary> findReturnDtoByUserId(@Param("userId") Long userId);
}
