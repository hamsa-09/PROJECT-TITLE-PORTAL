package com.example.projecttitleportal.Service;

import com.example.projecttitleportal.Entity.External;
import com.example.projecttitleportal.Entity.Internal;

public interface InternalService {
    Internal addInternal(Internal internal);

    External addExternal(External external);
}
