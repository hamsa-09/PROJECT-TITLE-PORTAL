package com.example.projecttitleportal.Repository;

import com.example.projecttitleportal.Entity.AdminLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLoginRepository extends JpaRepository<AdminLogin,Long> {
    AdminLogin findByEmailAndPassword(String email, String password);
}
