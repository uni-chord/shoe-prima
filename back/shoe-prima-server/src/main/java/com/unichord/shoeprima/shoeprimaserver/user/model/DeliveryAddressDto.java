package com.unichord.shoeprima.shoeprimaserver.user.model;

import com.unichord.shoeprima.shoeprimaserver.common.vo.Address;
import lombok.*;

public class DeliveryAddressDto {

    @Data
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Summary {

        private Long addressId;
        private Address address;
        private Byte isDefault;

    }

}
