package org.cec6.lingtan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"org.cec6.lingtan.config"})
@SpringBootApplication
public class LingtanApplication {

    public static void main(String[] args) {
        SpringApplication.run(LingtanApplication.class, args);
    }

}
