package org.cec6.lingtan.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/index").setViewName("index");

        registry.addViewController("/camera").setViewName("camera");   // 灵探 - 相机管理
        registry.addViewController("/mission").setViewName("mission"); // 灵探 - 任务关联

        registry.addViewController("/device").setViewName("device");   // 洞鉴 - 设备管理
        registry.addViewController("/control").setViewName("control");   // 洞鉴 - 布控关联
    }

}
