package org.cec6.lingtan.domain;

import lombok.*;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = "control_id")
public class Control {

    private String control_id;
    private String name;
    private Integer control_type;
    private String note;
    private String begin_time;
    private String end_time;

    private List<AlbumThreshold> albums;
    private List<Device> devices;

    public Control(String control_id, String name, Integer control_type, String note, String begin_time, String end_time) {
        this.control_id = control_id;
        this.name = name;
        this.control_type = control_type;
        this.note = note;
        this.begin_time = begin_time;
        this.end_time = end_time;
    }
}
