package com.team_management.exception;

import com.team_management.SlackIntegration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
    public ResourceNotFoundException(String message) {
    	super(message);
        SlackIntegration.sendMessageToSlack(message);
    }
}