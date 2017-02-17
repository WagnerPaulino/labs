package invert;

public class Inverter {

	public String inverter(String url) {
		if (url == null || url.length() <= 1) {
			return url;
		}
		return new StringBuffer(url).reverse().toString();/*Pega uma String e inverte ela*/
	}

	public String findAfter(String url) {
		String str = "";/*Variavel que vai receber todo o link*/
		String str2 = "";/*Variavel que vai receber o link desejado*/
		int ig = 0;/*Variavel de controle que muda de valor quando acha o "="*/
		int tam = url.length();/*Diz quandas letras tem a String passada como paramentro*/
		for (int i = 0; i < tam; i++) {
			str = str + (url.charAt(i));/*Vai concadenando letra por letra da String passada como paramentro a variavel str*/
			if (url.charAt(i) == '=') {/*Faz mudança de valor da variavel de controle*/
				ig = 1;
			}
			if (ig == 1) {/*armazena tudo a direita do "=" na variavel str2*/
				str2 = str2 + url.charAt(i);
			}
		}
		return str2;
	}

	public String findBefore(String url) {
		String str = "";
		String str2 = "";
		int ig = 0;
		int tam = url.length();
		for (int i = 0; i < tam; i++) {
			str = str + (url.charAt(i));
			if (url.charAt(i) == '=') {
				ig = 1;
			}
			if (ig != 1) {/*Armazena tudo a esquerda do "=" na variavel str2*/
				str2 = str2 + url.charAt(i);
			}
		}
		return str2;
	}
	
	/*
	public static void main(String args[]) {
		Inverter invert = new Inverter();
		String nome = "rengawfdsa=oniluap";
		String nome2 = invert.inverter(nome);
		System.out.println(nome2);
		String nome3 = invert.findBefore(nome2);
		System.out.println(nome3);
	}*/     //Codigo de para testar os metodos(Exemplo)
}
