package invert;

import java.time.format.ResolverStyle;
import java.util.ArrayList;
import java.util.List;

public class Inverter {
	List link1 = new ArrayList();
	List link2 = new ArrayList();

	public String inverter(String url) {
		if (url == null || url.length() <= 1) {
			return url;
		}
		return new StringBuffer(url).reverse().toString();
	}

	public String findAfter(String url) {
		String str = null;
		String str2 = null;
		int ig = 0;
		int tam = url.length();
		for (int i = 0; i < tam; i++) {
			str = str + (url.charAt(i));
			if (url.charAt(i) == '=') {
				ig = 1;
			}
			if (ig == 1) {
				str2 = str2 + url.charAt(i);
			}
		}
		return str2;
	}

	public String findBefore(String url) {
		String str = null;
		String str2 = null;
		int ig = 0;
		int tam = url.length();
		for (int i = 0; i < tam; i++) {
			str = str + (url.charAt(i));
			if (url.charAt(i) == '=') {
				ig = 1;
			}
			if (ig != 1) {
				str2 = str2 + url.charAt(i);
			}
		}
		return str2;
	}

	public static void main(String args[]) {
		Inverter invert = new Inverter();
		String nome = "rengawfdsa=oniluap";
		String nome2 = invert.inverter(nome);
		System.out.println(nome2);
		String nome3 = invert.findBefore(nome2);
		System.out.println(nome3);
	}
}
