package org.test.bookpub.controller;

import java.beans.PropertyEditorSupport;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.CounterService;
import org.springframework.boot.actuate.metrics.GaugeService;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.test.bookpub.entity.Author;
import org.test.bookpub.entity.Book;
import org.test.bookpub.entity.Reviewer;
import org.test.bookpub.groovy.GroovySample;
import org.test.bookpub.repository.AuthorRepository;
import org.test.bookpub.repository.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {
	@Autowired
	private BookRepository bookRepository;

	public class Isbn {
		private String isbn;

		public Isbn(String isbn) {
			this.isbn = isbn;
		}

		public String getIsbn() {
			return isbn;
		}
	}

	public class IsbnEditor extends PropertyEditorSupport {
		@Override
		public void setAsText(String text) throws IllegalArgumentException {
			if (StringUtils.hasText(text)) {
				setValue(new Isbn(text.trim()));
			} else {
				setValue(null);
			}
		}

		@Override
		public String getAsText() {
			Isbn isbn = (Isbn) getValue();
			if (isbn != null) {
				return isbn.getIsbn();
			} else {
				return "";
			}
		}
	}

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(Isbn.class, new IsbnEditor());
	}

	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Book> getAllBooks() {
		List<Book> books = new ArrayList<Book>();
		Iterable<Book> findAll = bookRepository.findAll();
		for (Book book : findAll) {
			books.add(book);
		}
		return books;
	}

	 	 	

	@RequestMapping(value = "/{isbn}/reviewers", method = RequestMethod.GET)
	public List<Reviewer> getReviewers(@PathVariable("isbn") Book book) {
		return book.getReviewers();
	}

	@RequestMapping(value = "/session", method = RequestMethod.GET)
	public String getSessionId(HttpServletRequest request) {
		return request.getSession().getId();
	}

	@Autowired
	private AuthorRepository authorRepository;

	@Autowired
	private CounterService counterService;

	@Autowired
	private GaugeService gaugeService;

	@RequestMapping(value = "/addAuth/{lastName}", method = RequestMethod.GET)
	public Author addAuth(@PathVariable String lastName) {
		// 用于计算执行的次数
		counterService.increment("books.addAuth.count");
		// 用于计算执行的时间
		// 记录开始时间
		long start = System.currentTimeMillis();

		// 保存数据
		Author author = new Author("王晓茜", lastName);
		authorRepository.save(author);

		// 记录结束时间
		long end = System.currentTimeMillis();
		gaugeService.submit("books.addAuth.latency", end - start);
		return author;
	}

	@Autowired
	private GroovySample groovySample;

	@RequestMapping(value = "/sayHelloByGroovy", method = RequestMethod.GET)
	public String sayHelloByGroovy(HttpServletRequest request) {
		return groovySample.sayHello();
	}
}