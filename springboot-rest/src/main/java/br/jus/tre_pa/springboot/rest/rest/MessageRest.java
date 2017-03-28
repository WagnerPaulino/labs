package br.jus.tre_pa.springboot.rest.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.jus.tre_pa.springboot.rest.domain.Message;
import br.jus.tre_pa.springboot.rest.service.MessageService;

@RestController
public class MessageRest {

	private Logger log = LoggerFactory.getLogger(MessageRest.class);

	@Autowired
	private MessageService messageService;

	/**
	 * Endpoint para buscar todas as instâncias de Message.
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/api/messages")
	public ResponseEntity<?> findAll(Pageable pageable) {
		log.debug("[findAll] Requisição para buscar todos messages");
		Page<Message> messages = messageService.findAll(pageable);
		log.debug("========="+messages);
		return ResponseEntity.ok().body(messages);
		
	}


	/**
	 * Endpoint para buscar 1 (uma) instância de Message.
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/api/messages/{id}")
	public ResponseEntity<?> find(@PathVariable("id") Long id) {
		log.debug("[find] Requisição para buscar message. id={}", id);
		boolean exists = messageService.exists(id);
		if (exists) {
			log.debug("[find] message encontrado.");
			return ResponseEntity.ok(messageService.findOne(id));
		}
		log.debug("[find] message NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

	/**
	 * Endpoint para deleção de Message.
	 *
	 */
	@RequestMapping(method = RequestMethod.DELETE, path = "/api/messages/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		log.debug("[delete] Requisição para deletar message. id={}", id);
		boolean exists = messageService.exists(id);
		if (exists) {
			log.debug("[delete] message encontrado.");
			messageService.delete(id);
			log.debug("[delete] message deletado com sucesso.");
			return ResponseEntity.ok().build();
		}
		log.debug("[delete] message NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

	/**
	 * Endpoint para inserção de Message.
	 *
	 */
	@RequestMapping(method = RequestMethod.POST, path = "/api/messages")
	public ResponseEntity<?> insert(@RequestBody Message message) {
		log.debug("[insert] Requisição para inserir message...");
		Message insertedMessage = messageService.insert(message);
		log.debug("[insert] Message inserido com sucesso. id={}", insertedMessage.getId());
		return ResponseEntity.ok(insertedMessage);
	}

	/**
	 * Endpoint para atualização de Message.
	 *
	 */
	@RequestMapping(method = RequestMethod.PUT, path = "/api/messages/{id}")
	public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody Message message) {
		log.debug("[update] Requisição para atualizar de message...");
		boolean exists = messageService.exists(id);
		if (exists) {
			log.debug("[update] message encontrado.");
			Message updatedMessage = messageService.update(message);
			log.debug("[update] message atualizado com sucesso.");
			return ResponseEntity.ok(updatedMessage);
		}
		log.debug("[update] message NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

}
