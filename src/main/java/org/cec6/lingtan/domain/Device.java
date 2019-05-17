package org.cec6.lingtan.domain;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = "device_id")
public class Device {

    private String device_id;
    private Integer device_type;
    private String device_no;
    private String name;
    private String note;
    private Float lon;
    private Float lat;
    private String position;
    private String org_no;
    private String auth_type;

    public Device(String device_id, Integer device_type, String device_no, String name, String note, Float lon, Float lat, String position, String org_no, String auth_type) {
        this.device_id = device_id;
        this.device_type = device_type;
        this.device_no = device_no;
        this.name = name;
        this.note = note;
        this.lon = lon;
        this.lat = lat;
        this.position = position;
        this.org_no = org_no;
        this.auth_type = auth_type;
    }
}
