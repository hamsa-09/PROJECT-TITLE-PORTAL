package com.example.projecttitleportal.dto;

public class AdminLoginResponse {
    private Boolean success;
    private String message;

    public AdminLoginResponse(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public AdminLoginResponse(Boolean success) {
        this.success = success;
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
