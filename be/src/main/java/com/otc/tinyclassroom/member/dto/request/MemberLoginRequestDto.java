package com.otc.tinyclassroom.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MemberLoginRequestDto {
    private String name;
    private String password;
}
