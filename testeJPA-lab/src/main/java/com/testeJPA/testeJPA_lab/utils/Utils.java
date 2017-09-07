package com.testeJPA.testeJPA_lab.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

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

}
