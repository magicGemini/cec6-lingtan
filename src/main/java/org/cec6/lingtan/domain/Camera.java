package org.cec6.lingtan.domain;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = "id")
public class Camera {

    private String id;
    private String name;
    private String streamIP;
    private String longitude;
    private String latitude;
    private String comment;

    public Camera(String id, String name, String streamIP, String longitude, String latitude, String comment) {
        this.id = id;
        this.name = name;
        this.streamIP = streamIP;
        this.longitude = longitude;
        this.latitude = latitude;
        this.comment = comment;
    }
}
