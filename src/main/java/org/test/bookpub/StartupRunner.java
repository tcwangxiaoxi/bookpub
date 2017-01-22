package org.test.bookpub;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.test.bookpub.entity.Author;
import org.test.bookpub.repository.AuthorRepository;
import org.test.bookpub.repository.BookRepository;
import org.test.bookpub.repository.PublisherRepository;
import org.test.bookpub.repository.ReviewerRepository;

@Order(Ordered.LOWEST_PRECEDENCE - 20)
public class StartupRunner implements CommandLineRunner {

	protected final Log logger = LogFactory.getLog(getClass());

	@Resource
	private DataSource ds;

	@Resource
	private BookRepository bookRepository;

	@Resource
	private AuthorRepository authorRepository;

	@Resource
	private PublisherRepository publisherRepository;

	@Resource
	private ReviewerRepository reviewerRepository;

	@Resource
	private JdbcTemplate jdbcTemplate;

	@Override
	public void run(String... arg0) throws Exception {

		logger.info("=============初始化测试数据=====================");

		// Author author = new Author("Alex", "Antonov");
		// author = authorRepository.save(author);
		//
		// Reviewer reviewer = new Reviewer("wang", "river");
		// reviewer = reviewerRepository.save(reviewer);
		//
		// Publisher publisher1 = new Publisher("Packt");
		// publisher1 = publisherRepository.save(publisher1);
		// Publisher publisher2 = new Publisher("ABC");
		// publisher2 = publisherRepository.save(publisher2);
		//
		// Book book1 = new Book("978-1-78528-415-1", "Spring Boot Recipes",
		// author, publisher1);
		// book1.getReviewers().add(reviewer);
		// bookRepository.save(book1);
		// Book book2 = new Book("978-3-78528-564-2", "Spring Boot IN ACTION",
		// author, publisher2);
		// bookRepository.save(book2);

		jdbcTemplate.execute("INSERT INTO author (id, first_name, last_name) VALUES (2, '王晓茜','Antonov')");

		Author author = new Author("王晓茜", "王晓茜");
		author = authorRepository.save(author);

		logger.info("============= 完成初始化   ===================== ");

	}

	//@Scheduled(initialDelayString = "${book.counter.delay}", fixedRateString = "${book.counter.rate}")
	public void run() {
		logger.info("Number of books: " + bookRepository.count());
	}

}
