package com.example.projecttitleportal.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="teacherlogin")
public class TeacherLogin {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String password;

    public TeacherLogin(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public TeacherLogin() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
