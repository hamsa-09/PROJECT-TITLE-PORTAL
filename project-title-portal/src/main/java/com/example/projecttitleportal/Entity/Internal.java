package com.example.projecttitleportal.Entity;


import jakarta.persistence.*;

@Entity
@Table(name="Internals")
public class Internal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long tsize;
    private String cluster;
    private String pname;
    private String mem1;
    private String mem2;
    private String mem3;
    private String roll1;
    private String roll2;
    private String roll3;
    private String status;

    public Internal(Long id, Long tsize, String cluster, String pname, String mem1, String mem2, String mem3, String roll1, String roll2, String roll3, String status) {
        this.id = id;
        this.tsize = tsize;
        this.cluster = cluster;
        this.pname = pname;
        this.mem1 = mem1;
        this.mem2 = mem2;
        this.mem3 = mem3;
        this.roll1 = roll1;
        this.roll2 = roll2;
        this.roll3 = roll3;
        this.status = status;
    }

    public Internal() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTsize() {
        return tsize;
    }

    public void setTsize(Long tsize) {
        this.tsize = tsize;
    }

    public String getCluster() {
        return cluster;
    }

    public void setCluster(String cluster) {
        this.cluster = cluster;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getMem1() {
        return mem1;
    }

    public void setMem1(String mem1) {
        this.mem1 = mem1;
    }

    public String getMem2() {
        return mem2;
    }

    public void setMem2(String mem2) {
        this.mem2 = mem2;
    }

    public String getMem3() {
        return mem3;
    }

    public void setMem3(String mem3) {
        this.mem3 = mem3;
    }

    public String getRoll1() {
        return roll1;
    }

    public void setRoll1(String roll1) {
        this.roll1 = roll1;
    }

    public String getRoll2() {
        return roll2;
    }

    public void setRoll2(String roll2) {
        this.roll2 = roll2;
    }

    public String getRoll3() {
        return roll3;
    }

    public void setRoll3(String roll3) {
        this.roll3 = roll3;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
