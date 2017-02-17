package invert;

import java.io.IOException;
import java.net.URISyntaxException;

public class OpenBrowser {

	public static void main(String args[]) throws IOException, URISyntaxException{

		java.awt.Desktop.getDesktop().browse(new java.net.URI("http://www.google.com"));

	}

}
