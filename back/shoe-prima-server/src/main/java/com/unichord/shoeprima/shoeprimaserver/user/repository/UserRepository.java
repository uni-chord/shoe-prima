package com.unichord.shoeprima.shoeprimaserver.user.repository;

import com.unichord.shoeprima.shoeprimaserver.user.model.User;
import com.unichord.shoeprima.shoeprimaserver.user.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.user.model.UserDto.Summary(
            u.email, 
            u.emailReception, 
            u.phoneNumber, 
            u.smsReception, 
            u.password, 
            u.provider, 
            u.gender, 
            u.birthDay, 
            u.birthYear) 
        FROM User u 
        WHERE u.id = :id
    """)
    Optional<UserDto.Summary> findUserSummaryById(@Param("id") Long id);

    @Query("""
        SELECT new com.unichord.shoeprima.shoeprimaserver.user.model.UserDto.Summary(
            u.email, 
            u.emailReception, 
            u.phoneNumber, 
            u.smsReception, 
            u.password, 
            u.provider, 
            u.gender, 
            u.birthDay, 
            u.birthYear) 
        FROM User u 
        WHERE u.email = :email
    """)
    Optional<UserDto.Summary> findByEmail(@Param("email") String email);

}
