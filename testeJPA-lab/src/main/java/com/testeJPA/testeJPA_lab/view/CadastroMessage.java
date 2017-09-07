package com.testeJPA.testeJPA_lab.view;

import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import com.testeJPA.testeJPA_lab.domain.Message;
import com.testeJPA.testeJPA_lab.facade.MessageFacade;
import com.testeJPA.testeJPA_lab.utils.Utils;

public class CadastroMessage extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private JFrame mainFrame;
	JTextField jmessage = new JTextField();
	// JTextField imagem = new JTextField();
	JTextField parametro = new JTextField();
	JFileChooser file = new JFileChooser();
	JButton selecionar = new JButton("Selecionar");
	JPanel footerFrame = new JPanel();
	String caminhoArquivo = null;

	private Message message = new Message();
	private MessageFacade facade = new MessageFacade();
	private Utils utils = new Utils();

	public CadastroMessage() {
		prepareGUI();
		showInputs();
		showButton();
	}

	private void prepareGUI() {
		GridLayout layout = new GridLayout(6, 5);
		layout.setHgap(50);
		layout.setHgap(50);
		mainFrame = new JFrame("Java Swing Examples");

		footerFrame.setLayout(new GridLayout(1, 3));

		mainFrame.setSize(600, 600);
		mainFrame.setLayout(layout);
		mainFrame.add(footerFrame);
		mainFrame.setVisible(true);

	}

	private void showButton() {
		JButton okButton = new JButton("Salvar");
		okButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					message.setMessage(jmessage.getText());
					message.setArquivo(utils.imageToByte(caminhoArquivo));
					facade.createMessage(message);
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}

			}
		});
		mainFrame.add(okButton);

		JButton jprocurar = new JButton("Procurar");
		jprocurar.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					Message message = new Message();
					message = facade.findMessage(Long.valueOf(parametro.getText()));
					ListarMessage listar = new ListarMessage();
					listar.setMessage(message);
					listar.setVisible(true);
				} catch (Exception e2) {
					e2.printStackTrace();
				}

			}
		});

		selecionar.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				int retorno = file.showOpenDialog(null);
				if (retorno == JFileChooser.APPROVE_OPTION) {
					caminhoArquivo = file.getSelectedFile().getAbsolutePath();
				}

			}
		});

		footerFrame.add(jprocurar);
		mainFrame.setVisible(true);
	}

	private void showInputs() {
		JLabel texto = new JLabel("Insira a sua mensagem:");
		jmessage.setMinimumSize(new Dimension(50, 50));

		JLabel texto2 = new JLabel("Insira a sua imagem:");
		jmessage.setMinimumSize(new Dimension(50, 50));

		JLabel texto3 = new JLabel("Insira o parametro:");
		jmessage.setMinimumSize(new Dimension(50, 50));

		mainFrame.add(texto);
		mainFrame.add(jmessage);

		mainFrame.add(texto2);

		mainFrame.add(selecionar);

		footerFrame.add(texto3);
		footerFrame.add(parametro);
	}

}
