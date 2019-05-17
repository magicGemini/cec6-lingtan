package org.cec6.lingtan.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.cec6.lingtan.domain.Device;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
public class DeviceController {

    private static List<Device> deviceList = Arrays.asList(
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e1", 5, "统一设备ID", "洞鉴相机1号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e2", 5, "统一设备ID", "洞鉴相机2号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e3", 5, "统一设备ID", "洞鉴相机3号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e4", 5, "统一设备ID", "洞鉴相机4号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e5", 5, "统一设备ID", "洞鉴相机5号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e6", 5, "统一设备ID", "洞鉴相机6号", "test", 110.10f, 89.22f, "长安街道口", "", ""),
            new Device("a34e3b9c-fb6f-4473-be83-3eec0716c5e7", 5, "统一设备ID", "洞鉴相机7号", "test", 110.10f, 89.22f, "长安街道口", "", "")
    );

    @GetMapping("/api/public/device/listDevices")
    public List<Device> listDevices() {
        return deviceList;
    }

    @PostMapping("/api/public/device/createDevice")
    public String createDevice(@RequestBody Device device) {
        deviceList = new ArrayList<>(deviceList);
        device.setDevice_id(UUID.randomUUID().toString());
        deviceList.add(device);

        JSONObject ret = new JSONObject();
        ret.put("request_id", "b2caca32-0bbb-4c6d-a5ab-9249783bd4d0");
        ret.put("version", "v5");
        ret.put("api_id", "D002");
        ret.put("code", 0);
        ret.put("msg", "success");
        JSONArray data = new JSONArray();
        JSONObject object = new JSONObject();
        object.put("device_id", device.getDevice_id());
        data.add(object);
        ret.put("data", data);
        return ret.toJSONString();
    }


    @DeleteMapping("/api/public/device/deleteDevice")
    public String deleteDevice(@RequestParam("device_id") String device_id) {
        System.out.println("device_id: " + device_id);
        deviceList = deviceList.stream().filter(device -> !device.getDevice_id().equals(device_id)).collect(Collectors.toList());

        JSONObject ret = new JSONObject();
        ret.put("request_id", "b2caca32-0bbb-4c6d-a5ab-9249783bd4d0");
        ret.put("version", "v5");
        ret.put("api_id", "D003");
        ret.put("code", 0);
        ret.put("msg", "success");
        JSONArray data = new JSONArray();
        JSONObject object = new JSONObject();
        object.put("device_id", device_id);
        data.add(object);
        ret.put("data", data);
        return ret.toJSONString();
    }

}
