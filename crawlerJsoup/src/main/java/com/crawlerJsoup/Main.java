package com.crawlerJsoup;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Main {

	public static void main(String[] args) throws IOException {
		Document doc = Jsoup.connect("http://www.google.com").get();
		System.out.println(doc);
	}

}
