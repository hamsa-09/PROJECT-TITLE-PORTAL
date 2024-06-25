package com.example.projecttitleportal.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Externals")
public class External {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eid;
    private String esize;
    private String domain;
    private String project;
    private String guide;
    private String emem1;
    private String emem2;
    private String emem3;
    private String eroll1;
    private String eroll2;
    private String eroll3;

    public External(Long eid, String esize, String domain, String project, String guide, String emem1, String emem2, String emem3, String eroll1, String eroll2, String eroll3, String status) {
        this.eid = eid;
        this.esize = esize;
        this.domain = domain;
        this.project = project;
        this.guide = guide;
        this.emem1 = emem1;
        this.emem2 = emem2;
        this.emem3 = emem3;
        this.eroll1 = eroll1;
        this.eroll2 = eroll2;
        this.eroll3 = eroll3;
        this.status = status;
    }

    private String status;

    public External() {
    }

    public Long getEid() {
        return eid;
    }

    public void setEid(Long eid) {
        this.eid = eid;
    }

    public String getEsize() {
        return esize;
    }

    public void setEsize(String esize) {
        this.esize = esize;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getGuide() {
        return guide;
    }

    public void setGuide(String guide) {
        this.guide = guide;
    }

    public String getEmem1() {
        return emem1;
    }

    public void setEmem1(String emem1) {
        this.emem1 = emem1;
    }

    public String getEmem2() {
        return emem2;
    }

    public void setEmem2(String emem2) {
        this.emem2 = emem2;
    }

    public String getEmem3() {
        return emem3;
    }

    public void setEmem3(String emem3) {
        this.emem3 = emem3;
    }

    public String getEroll1() {
        return eroll1;
    }

    public void setEroll1(String eroll1) {
        this.eroll1 = eroll1;
    }

    public String getEroll2() {
        return eroll2;
    }

    public void setEroll2(String eroll2) {
        this.eroll2 = eroll2;
    }

    public String getEroll3() {
        return eroll3;
    }

    public void setEroll3(String eroll3) {
        this.eroll3 = eroll3;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
