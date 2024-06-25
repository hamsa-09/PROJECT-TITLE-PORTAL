package com.example.projecttitleportal.Service;
import com.example.projecttitleportal.Entity.External;
import com.example.projecttitleportal.Entity.Internal;
import com.example.projecttitleportal.Repository.ExternalRespository;
import com.example.projecttitleportal.Repository.InternalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InternalServiceImp implements InternalService{
@Autowired
    public InternalRepository internalRepository;
@Autowired
public ExternalRespository externalRespository;
    @Override
    public Internal addInternal(Internal internal) {
        return internalRepository.save(internal);
    }

    @Override
    public External addExternal(External external) {
        return externalRespository.save(external);
    }


}
