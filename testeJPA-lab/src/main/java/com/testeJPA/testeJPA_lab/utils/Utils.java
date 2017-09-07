package com.testeJPA.testeJPA_lab.utils;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;
import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Utils {

	public byte[] imageToByte(String image) throws IOException {
		InputStream is = null;
		byte[] buffer = null;
		is = new FileInputStream(image);
		buffer = new byte[is.available()];
		is.read(buffer);
		is.close();
		return buffer;
	}

	public BufferedImage bytoToBufferedImage(byte[] image) throws IOException {
		InputStream in = new ByteArrayInputStream(image);
		BufferedImage bImageFromConvert = ImageIO.read(in);
		return bImageFromConvert;
	}

	public Icon byteImg(byte[] i) {
		Image image = new ImageIcon(i).getImage();
		ImageIcon icon = new ImageIcon(image);
		return icon;
	}

}
