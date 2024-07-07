package com.unichord.shoeprima.shoeprimaserver.user.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import io.hypersistence.utils.hibernate.id.Tsid;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "order")
public class User implements OnCreateEntity {

    @Id
    @Tsid
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email_reception", nullable = false, columnDefinition = "TINYINT(1)")
    private Boolean emailReception;

    @Column(name = "phone_number", nullable = false, length = 11)
    private String phoneNumber;

    @Column(name = "sms_reception", nullable = false, columnDefinition = "TINYINT(1)")
    private Boolean smsReception;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "provider", nullable = false)
    private Byte provider;

    @Column(name = "gender", nullable = false)
    private Byte gender;

    @Column(name = "birth_day", nullable = false, length = 5)
    private String birthDay;

    @Column(name = "birth_year", nullable = false)
    private Integer birthYear;

    @Column(name = "is_active", nullable = false)
    private Byte isActive;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Wish> wishes = new ArrayList<>();

    @Builder
    public User(String email, String name, Boolean emailReception, String phoneNumber, Boolean smsReception, String password, Byte provider, Byte gender, String birthDay, Integer birthYear, Byte isActive) {

//        Assert 문을 어디까지 이용해야 하는가?
        Assert.hasText(email, "email must not be empty");
        Assert.notNull(emailReception, "emailReception must not be null");
        Assert.hasText(phoneNumber, "phoneNumber must not be empty" );
        Assert.notNull(smsReception, "smsReception must not be null");

        this.email = email;
        this.name = name;
        this.emailReception = emailReception;
        this.phoneNumber = phoneNumber;
        this.smsReception = smsReception;
        this.password = password;
        this.provider = provider;
        this.gender = gender;
        this.birthDay = birthDay;
        this.birthYear = birthYear;
        this.isActive = isActive;
    }

    /*
        Changing Logics
    */


    public void changeEmail(String email) {
//        Assert.hasText(email, "email must not be empty");
        this.email = email;
    }

    public void changeName(String name) {
//        Assert.hasText(email, "email must not be empty");
        this.name = name;
    }

    public void changeEmailReception(Boolean emailReception) {
//        Assert.notNull(emailReception, "emailReception must not be null");
        this.emailReception = emailReception;
    }

    public void changePhoneNumber(String phoneNumber) {
//        Assert.hasText(phoneNumber, "phoneNumber must not be empty");
        this.phoneNumber = phoneNumber;
    }

    public void changeSmsReception(Boolean smsReception) {
//        Assert.notNull(smsReception, "smsReception must not be null");
        this.smsReception = smsReception;
    }

    public void changePassword(String password) {
//        Assert.hasText(password, "password must not be empty");
        this.password = password;
    }

    public void changeProvider(Byte provider) {
//        Assert.notNull(provider, "provider must not be null");
        this.provider = provider;
    }

    public void changeGender(Byte gender) {
//        Assert.notNull(gender, "gender must not be null");
        this.gender = gender;
    }

    public void changeBirthDay(String birthDay) {
//        Assert.hasText(birthDay, "birthDay must not be empty");
        this.birthDay = birthDay;
    }

    public void changeBirthYear(Integer birthYear) {
//        Assert.notNull(birthYear, "birthYear must not be null");
        this.birthYear = birthYear;
    }

    public void changeActiveStatus(Byte isActive) {
//        Assert.notNull(isActive, "isActive must not be null");
        this.isActive = isActive;
    }

    public void addWish(Wish wish) {
        wishes.add(wish);
    }

    public void removeWish(Wish wish) {
        wishes.remove(wish);
    }

    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
