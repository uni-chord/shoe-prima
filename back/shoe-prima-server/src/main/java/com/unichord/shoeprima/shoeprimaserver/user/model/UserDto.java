package com.unichord.shoeprima.shoeprimaserver.user.model;

import lombok.*;

public class UserDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private String email;
        private Boolean emailReception;
        private String phoneNumber;
        private Boolean smsReception;
        private String password;
        private Byte provider;
        private Byte gender;
        private String birthDay;
        private Integer birthYear;

    }

}
