package com.example.projecttitleportal.Repository;

import com.example.projecttitleportal.Entity.Internal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternalRepository extends JpaRepository<Internal,Long> {
}
