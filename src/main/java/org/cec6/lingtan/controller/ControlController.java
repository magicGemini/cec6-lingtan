package org.cec6.lingtan.controller;

import org.cec6.lingtan.domain.Control;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ControlController {

    private static List<Control> controlList = Arrays.asList(
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d1", "重点布控-1", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33"),
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d2", "重点布控-2", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33"),
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d3", "重点布控-3", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33"),
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d4", "重点布控-4", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33"),
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d5", "重点布控-5", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33"),
            new Control("0f45506d-d80a-4709-82ae-63a334c3a3d6", "重点布控-6", 0, "重点布控test", "2019-05-16 17:12:33", "2019-05-16 19:12:33")
    );

    @GetMapping("/api/public/control/listControls")
    public List<Control> listControls() {
        return controlList;
    }



}
