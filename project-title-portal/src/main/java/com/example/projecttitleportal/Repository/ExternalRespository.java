package com.example.projecttitleportal.Repository;

import com.example.projecttitleportal.Entity.External;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalRespository extends JpaRepository<External,Long> {
}
