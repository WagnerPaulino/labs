package com.testeJPA.testeJPA_lab.view;

import java.awt.GridLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import com.testeJPA.testeJPA_lab.domain.Message;
import com.testeJPA.testeJPA_lab.utils.Utils;

public class ListarMessage extends JFrame{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private JFrame mainFrame;
	JPanel footerFrame = new JPanel();
	JLabel lMessage = new JLabel("Message");
	JLabel cMessage = new JLabel();
	JLabel lArquivo = new JLabel("Arquivo");
	JLabel cArquivo = new JLabel();
	
	private Message message = new Message();
	private Utils utils = new Utils();

	public ListarMessage(Message message) {
		prepareGUI();
		showInputs();
		showButton();
		this.message = message;
	}

	private void prepareGUI() {
		GridLayout layout = new GridLayout(6, 5);
		layout.setHgap(50);
		layout.setHgap(50);
		mainFrame = new JFrame("Java Swing Examples");

		footerFrame.setLayout(new GridLayout(1, 4));

		mainFrame.setSize(600, 600);
		mainFrame.setLayout(layout);
		mainFrame.add(footerFrame);
		mainFrame.setVisible(true);

	}

	private void showButton() {
		
		cMessage.setText(message.getMessage());
		cArquivo.setIcon(utils.byteImg(message.getArquivo()));
		footerFrame.add(lMessage);
		footerFrame.add(cMessage);
		footerFrame.add(lArquivo);
		footerFrame.add(cArquivo);
		
		
		
		mainFrame.setVisible(true);
	}

	private void showInputs() {
			
		
		mainFrame.setVisible(true);
	}
}
