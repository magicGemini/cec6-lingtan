package org.cec6.lingtan.controller;

import org.cec6.lingtan.domain.Camera;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CameraController {

    private static final Logger logger = LoggerFactory.getLogger(CameraController.class);

    private static List<Camera> cameraList = Arrays.asList(
            new Camera("1", "灵探相机-1", "192.168.3.100", "33.58978", "45.21685", "test"),
            new Camera("2", "灵探相机-2", "192.168.3.101", "33.58978", "45.21685", "test"),
            new Camera("3", "灵探相机-3", "192.168.3.102", "33.58978", "45.21685", "test"),
            new Camera("4", "灵探相机-4", "192.168.3.103", "33.58978", "45.21685", "test"),
            new Camera("5", "灵探相机-5", "192.168.3.104", "33.58978", "45.21685", "test")
    );

    @GetMapping("/ltCamera/list")
    public List<Camera> ltCameraList() {
        return cameraList;
    }

    @PostMapping("/ltCamera/add")
    public String addCamera(@RequestBody Camera camera) {

        logger.info("create Camera: " + camera);

        camera.setId(String.valueOf(cameraList.size() + 1));

        cameraList = new ArrayList<>(cameraList);
        cameraList.add(camera);
        return "success";
    }

    @DeleteMapping("/ltCamera/{id}")
    public String delCamera(@PathVariable String id) {
        logger.info("delete Camera: " + id);
        cameraList = cameraList.stream().filter(camera -> !camera.getId().equals(id)).collect(Collectors.toList());
        return "success";
    }

}
