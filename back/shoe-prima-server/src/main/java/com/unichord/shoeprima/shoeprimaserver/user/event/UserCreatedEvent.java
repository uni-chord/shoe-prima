package com.unichord.shoeprima.shoeprimaserver.user.event;

import com.unichord.shoeprima.shoeprimaserver.user.model.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class UserCreatedEvent {

    private final User user;

}
