package com.example.apigw.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Appconfig {
    @Bean
    public RouteLocator getroute(RouteLocatorBuilder builder)
    {
       return builder.routes()
               .route(p->p.path("/api/customer/**").uri("http://localhost:8807/*"))
               .route(p->p.path("/api/v1/**").uri("http://localhost:8805/*"))
               .build();
    }
}
