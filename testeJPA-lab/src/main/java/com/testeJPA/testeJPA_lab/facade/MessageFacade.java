package com.testeJPA.testeJPA_lab.facade;

import java.util.List;

import com.testeJPA.testeJPA_lab.dao.MessageDAO;
import com.testeJPA.testeJPA_lab.domain.Message;

public class MessageFacade {

	private MessageDAO messageDAO = new MessageDAO();

	public void createMessage(Message message) {
		messageDAO.beginTransaction();
		messageDAO.save(message);
		messageDAO.commitAndCloseTransaction();
	}

	public void updateMessage(Message message) {
		messageDAO.beginTransaction();
		Message persistedMessage = messageDAO.find(message.getId());
		persistedMessage.setMessage(message.getMessage());
		messageDAO.commitAndCloseTransaction();
	}

	public void deleteMessage(Message message) {
		messageDAO.beginTransaction();
		Message persistedMessageWithIdOnly = messageDAO.findReferenceOnly(message.getId());
		messageDAO.delete(persistedMessageWithIdOnly);
		messageDAO.commitAndCloseTransaction();

	}

	public Message findMessage(Long id) {
		messageDAO.beginTransaction();
		Message message = messageDAO.find(id);
		messageDAO.closeTransaction();
		return message;
	}

	public List<Message> listAll() {
		messageDAO.beginTransaction();
		List<Message> result = messageDAO.findAll();
		messageDAO.closeTransaction();

		return result;
	}
}
