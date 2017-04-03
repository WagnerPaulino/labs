package br.jus.tre_pa.springboot.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import br.jus.tre_pa.springboot.rest.domain.Message;
import br.jus.tre_pa.springboot.rest.repository.MessageRepository;
import java.util.List;

@Service
public class MessageService {

	@Autowired
	private MessageRepository messageRepository;


	
	/**
	 * Retorna uma lista de  Message com paginação. 
	 *
	 * @param pageable 
	 * @return 
	 */
	public Page<Message> findAll(Pageable pageable) {
		return messageRepository.findAll(pageable);
	}


	/**
	 * Retorna uma instância de  Message pelo id. 
	 *
	 */
	public Message findOne(Long id) {
		return messageRepository.findOne(id);
	}

	/**
	 * Verifica se a instância de Message existe na base de dados.
	 *
	 * @param id Id de Message.
	 * @return
	 */
	public boolean exists(Long id) {
		return messageRepository.exists(id);
	}

	/**
	 * Deleta uma instância de Message.
	 * 
	 * @param id Id do objeto a ser deletado.
	 */
	@Transactional
	public void delete(Long id) {
		messageRepository.delete(id);
	}
	
	/**
	 * Insere uma instância de Message na base de dados. 
	 *
	 * @param newFoo Objeto com os dados para inserção de Message.
	 * @return Message atualizado.
	 */
	@Transactional
	public Message insert(Message newMessage) {
		Message message = new Message();
		this.updateAttributes(message, newMessage);
		return messageRepository.save(message);
	}
	
	/**
	 * Atualiza a instância de Message na base de dados. 
	 *
	 * @param newFoo Objeto com os dados para atualização de Message.
	 * @return Message atualizado.
	 */
	@Transactional
	public Message update(Message newMessage) {
		Message message = messageRepository.findOne(newMessage.getId());
		this.updateAttributes(message, newMessage);
		return messageRepository.save(message);
	}

	private void updateAttributes(Message message, Message newMessage) {
		message.setEscritor(newMessage.getEscritor());
		message.setMessage(newMessage.getMessage());
	}
	
	public Page<Message> findByMessage(String message, Pageable pageable){
		Page<Message> messages = messageRepository.findByMessage(message, pageable);
		return messages;
	}

}
