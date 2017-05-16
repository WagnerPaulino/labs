package br.jus.tre_pa.rest.templete.lab;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import br.jus.tre_pa.rest.templete.lab.domain.Message;

@SpringBootApplication
public class RestTempleteLabApplication {

	private static final Logger log = LoggerFactory.getLogger(RestTempleteLabApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RestTempleteLabApplication.class, args);
		RestTemplate restTemplate = new RestTemplate();
		Message quote = restTemplate.getForObject("http://localhost:8092/springboot-rest/api/messages/", Message.class);
	}
}