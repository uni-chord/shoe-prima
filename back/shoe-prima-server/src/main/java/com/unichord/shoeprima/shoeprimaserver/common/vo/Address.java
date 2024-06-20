package com.unichord.shoeprima.shoeprimaserver.common.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class Address {

    private final String address1;
    private final String address2;
    private final String address3;

}
