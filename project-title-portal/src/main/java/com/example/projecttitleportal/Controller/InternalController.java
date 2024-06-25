package com.example.projecttitleportal.Controller;

import com.example.projecttitleportal.Entity.*;
import com.example.projecttitleportal.Repository.*;
import com.example.projecttitleportal.Service.InternalService;
import com.example.projecttitleportal.dto.LoginRequest;
import com.example.projecttitleportal.dto.LoginResponse;
import com.example.projecttitleportal.dto.TeacherLoginRequest;
import com.example.projecttitleportal.dto.TeacherLoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class InternalController {
    @Autowired
    public InternalService internalService;
    @Autowired
    public StudentLoginRepository studentLoginRepository;
    @Autowired
    public TeacherLoginRepository teacherLoginRepository;
    @Autowired
    public AdminLoginRepository adminLoginRepository;
    @Autowired
    public InternalRepository internalRepository;
@Autowired
public ExternalRespository externalRespository;

    @PostMapping("/studentLogin")
    public LoginResponse login(@RequestBody LoginRequest loginRequest){
      String email=loginRequest.getEmail();
      String password=loginRequest.getPassword();
    StudentLogin studentLogin=studentLoginRepository.findByEmailAndPassword(email,password);
      if(studentLogin!=null){
          return new LoginResponse(true,"Login successfull!");
      }

        AdminLogin adminLogin=adminLoginRepository.findByEmailAndPassword(email,password);
      if(adminLogin!=null){
          return new LoginResponse(true,"Login successfull!");
      }
      return new LoginResponse(false,"Invalid");
    }

    @PostMapping("/teacherLogin")
    public TeacherLoginResponse login(@RequestBody TeacherLoginRequest teacherLoginRequest){
        String email=teacherLoginRequest.getEmail();
        String password=teacherLoginRequest.getPassword();
        TeacherLogin teacherLogin=teacherLoginRepository.findByEmailAndPassword(email,password);
        if(teacherLogin!=null){
            return new TeacherLoginResponse(true,"Login successfull!");
        }
        return new TeacherLoginResponse(false,"invalid");
    }

    @PostMapping("/addinternal")
    public String addData(@RequestBody Internal internal){
        internalService.addInternal(internal);
        return "submitted";
    }
    @PostMapping("/addexternal")
    public String addEx(@RequestBody External external){
        internalService.addExternal(external);
        return "Submitted";
    }
}
