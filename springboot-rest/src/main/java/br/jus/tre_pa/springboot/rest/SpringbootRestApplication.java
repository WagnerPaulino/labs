package br.jus.tre_pa.springboot.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class SpringbootRestApplication {

	public static void main(String[] args) throws Exception{
		SpringApplication.run(SpringbootRestApplication.class, args);
	}
}