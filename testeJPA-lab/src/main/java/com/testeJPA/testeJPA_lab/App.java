package com.testeJPA.testeJPA_lab;

import com.testeJPA.testeJPA_lab.domain.Message;
import com.testeJPA.testeJPA_lab.facade.MessageFacade;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		try {
			MessageFacade facade = new MessageFacade();
			Message message1 = new Message();
			message1.setMessage("olá mundo");
			facade.createMessage(message1);
		} catch (Exception e) {
			System.out.println("Erro ao salvar: " + e);
		}
	}
}
