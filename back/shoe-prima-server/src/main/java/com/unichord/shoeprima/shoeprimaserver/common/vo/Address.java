package com.unichord.shoeprima.shoeprimaserver.common.vo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class Address {

    private final String zipCode;
    private final String mainAddress;
    private final String subAddress;

}
