package com.example.projecttitleportal.dto;

public class LoginResponse {
    private Boolean success;
    private String message;

    public LoginResponse(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public LoginResponse() {
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
