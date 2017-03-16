package br.jus.tre_pa.spring.boot.admin.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

import de.codecentric.boot.admin.config.EnableAdminServer;

@Configuration
@EnableAdminServer
@SpringBootApplication
@EnableAutoConfiguration
public class SpringBootAdminTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAdminTestApplication.class, args);
	}
}