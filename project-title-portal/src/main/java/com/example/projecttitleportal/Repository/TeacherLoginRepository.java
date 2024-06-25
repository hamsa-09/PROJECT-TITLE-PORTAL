package com.example.projecttitleportal.Repository;

import com.example.projecttitleportal.Entity.TeacherLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherLoginRepository extends JpaRepository<TeacherLogin,Long> {
    TeacherLogin findByEmailAndPassword(String email, String password);
}
