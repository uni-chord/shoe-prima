package com.unichord.shoeprima.shoeprimaserver.user.event;

import com.unichord.shoeprima.shoeprimaserver.user.model.User;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

@Service
public class UserEventService {
    private final ApplicationEventPublisher eventPublisher;

    public UserEventService(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    public void publishUserCreatedEvent(User user) {
        UserCreatedEvent event = UserCreatedEvent.of(user);
        eventPublisher.publishEvent(event);
    }
}
