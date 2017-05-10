package br.jus.tre_pa.springboot.rest.configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import br.jus.tre_pa.springboot.rest.rest.MessageRest;

@Component
public class Agendamentos {
	
	private static final Logger log = LoggerFactory.getLogger(Agendamentos.class);

	@Scheduled(fixedRate = 5000L)
	public void verificando(){
		log.debug("Verificando....");
	}
}
