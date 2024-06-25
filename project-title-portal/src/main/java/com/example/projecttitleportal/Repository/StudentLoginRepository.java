package com.example.projecttitleportal.Repository;

import com.example.projecttitleportal.Entity.StudentLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentLoginRepository extends JpaRepository<StudentLogin,Long> {
    StudentLogin findByEmailAndPassword(String email, String password);
}
