package com.unichord.shoeprima.shoeprimaserver.admin.model;

import com.unichord.shoeprima.shoeprimaserver.common.interfaces.OnCreateEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Admin")
public class Admin implements OnCreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id", nullable = false)
    private Long adminId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "dept", nullable = false)
    private String dept;

    @Column(name = "emp_no", nullable = false)
    private String empNo;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role_admin", nullable = false)
    private String roleAdmin;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Admin(String name, String dept, String empNo, String password, String roleAdmin) {
        this.name = name;
        this.dept = dept;
        this.empNo = empNo;
        this.password = password;
        this.roleAdmin = roleAdmin;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changeDept(String dept) {
        this.dept = dept;
    }

    public void changeEmpNo(String empNo) {
        this.empNo = empNo;
    }

    public void changePassword(String password) {
        this.password = password;
    }

    public void changeRoleAdmin(String roleAdmin) {
        this.roleAdmin = roleAdmin;
    }

    @PrePersist
    @Override
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}