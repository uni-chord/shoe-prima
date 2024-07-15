package com.unichord.shoeprima.shoeprimaserver.user.repository;

import com.unichord.shoeprima.shoeprimaserver.user.model.Wish;
import com.unichord.shoeprima.shoeprimaserver.user.model.WishDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WishRepository extends JpaRepository<Wish, Long> {

    @Query("""
            SELECT new com.unichord.shoeprima.shoeprimaserver.user.model.WishDto.Summary(
                w.id,
                w.userId, 
                w.productId)
            FROM Wish w 
            WHERE w.id = :id
    """)
    Optional<WishDto.Summary> findWishDtoSummaryById(@Param("id") Long id);

    @Query("""
            SELECT new com.unichord.shoeprima.shoeprimaserver.user.model.WishDto.Summary(
                w.id,
                w.userId,
                w.productId)
            FROM Wish w
            WHERE w.userId = :userid
    """)
    List<WishDto.Summary> findWishDtoSummaryByUserId(@Param("userId") Long userId);
}
