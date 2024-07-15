package com.unichord.shoeprima.shoeprimaserver.order.repository;

import com.unichord.shoeprima.shoeprimaserver.order.model.Order;
import com.unichord.shoeprima.shoeprimaserver.order.model.OrderDetailDto;
import com.unichord.shoeprima.shoeprimaserver.order.model.OrderDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.order.model.OrderDto.Summary(
            o.id, 
            o.orderNumber, 
            o.postNumber, 
            o.totalPrice, 
            o.createdAt,
            null) 
        FROM Order o 
        WHERE o.id = :id
    """)
    Optional<OrderDto.Summary> findOrderDtoSummaryById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.order.model.OrderDto.Summary(
            o.id, 
            o.orderNumber, 
            o.postNumber, 
            o.totalPrice, 
            o.createdAt,
            null) 
        FROM Order o 
        WHERE o.userId = :userId
    """)
    List<OrderDto.Summary> findOrderDtoSummaryByUserId(@Param("userId") Long userId);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.order.model.OrderDetailDto.Summary(
            od.id, 
            od.orderId, 
            od.productId, 
            p.name, 
            od.productSize, 
            p.color, 
            od.productQnt, 
            od.priceSum, 
            od.orderStatus, 
            od.createdAt) 
        FROM OrderDetail od 
        JOIN Product p ON od.productId = p.id 
        WHERE od.orderId = :orderId
    """)
    List<OrderDetailDto.Summary> findOrderDetailsByOrderId(@Param("orderId") Long orderId);

}
