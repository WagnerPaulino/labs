package com.crawlerJsoup;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Main {
	private static String user = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";

	public static void main(String[] args) throws IOException {
		Document doc = Jsoup.connect("http://www.google.com").userAgent(user).get();
		System.out.println(doc);
	}

}
