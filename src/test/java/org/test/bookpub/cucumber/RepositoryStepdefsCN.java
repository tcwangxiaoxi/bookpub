package org.test.bookpub.cucumber;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationContextLoader;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;
import org.test.bookpub.BookPubApplication;
import org.test.bookpub.entity.Book;
import org.test.bookpub.mockito.TestMockBeansConfig;
import org.test.bookpub.repository.BookRepository;

import cucumber.api.java.zh_cn.假设;
import cucumber.api.java.zh_cn.当;
import cucumber.api.java.zh_cn.那么;

@WebAppConfiguration
@ContextConfiguration(classes = { BookPubApplication.class,
		TestMockBeansConfig.class }, loader = SpringApplicationContextLoader.class)
public class RepositoryStepdefsCN { 
	@Autowired
	private WebApplicationContext context;
	@Autowired
	private DataSource ds;
	@Autowired
	private BookRepository bookRepository;
	private Book loadedBook;

	@假设("^\\\"(cucumber\\/[^\\\"]*)\\\"路径将作为书的原始信息被加载$")
	public void 路径将作为书的原始信息被加载(String fixtureName) throws Throwable {
		ResourceDatabasePopulator populator = new ResourceDatabasePopulator(
				context.getResource("classpath:/" + fixtureName + ".sql"));
		DatabasePopulatorUtils.execute(populator, ds);
	}

	@假设("^确定数据中有(\\d+)本书可用$")
	public void 确定数据中有书可用(int bookCount) throws Throwable {
		assertEquals(bookCount, bookRepository.count());
	}

	@当("^通过isbn号为\\\"([\\d-]+)\\\"搜索时$")
	public void 通过isbn号搜索(String isbn) throws Throwable {
		loadedBook = bookRepository.findBookByIsbn(isbn);
		assertNotNull(loadedBook);
		assertEquals(isbn, loadedBook.getIsbn());
	}

	@那么("^书名为\\\"([^\"]*)\\\"的将被找到。$")
	public void 书将被找到(String bookTitle) throws Throwable {
		assertNotNull(loadedBook);
		assertEquals(bookTitle, loadedBook.getTitle());
	}
}
