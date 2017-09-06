package com.testeJPA.testeJPA_lab.dao;

import com.testeJPA.testeJPA_lab.domain.Message;

public class MessageDAO extends GenericDAO<Message> {

	public MessageDAO(Class<Message> entityClass) {
		super(entityClass);
		// TODO Auto-generated constructor stub
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MessageDAO() {
		super(Message.class);
	}

	public void delete(Message message) {
		super.delete(message.getId(), Message.class);
	}
}
