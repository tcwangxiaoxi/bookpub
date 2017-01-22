package org.test.bookpub;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.test.bookpubstarter.dbcount.EnableDbCounting;

@SpringBootApplication
@EnableScheduling
@EnableDbCounting
@ComponentScan(excludeFilters = @ComponentScan.Filter(UsedForTesting.class) )
public class BookPubApplication {

	protected final Log logger = LogFactory.getLog(getClass());

	public static void main(String[] args) {
		SpringApplication.run(BookPubApplication.class, args);
	}

	@Bean
	@Profile("logger")
	public StartupRunner schedulerRunner() {
		return new StartupRunner();
	}

	@Bean
	// 可以通过--my.config.value=abc 在启动的时候为该变量赋值.
	public CommandLineRunner configValuePrinter(@Value("${my.config.value:}") String configValue) {
		return args -> LogFactory.getLog(getClass()).info("Value of my.config.value property is: " + configValue);
	}

	// @Bean
	// 由于db-count-starter包中的DbCountRunner的配置是@ConditionalOnMissingBean,所以如果配置了这个bean，
	// 将阻止db-count-starter包中的DbCountRunner注入到容器中。
	// public DbCountRunner dbCountRunner(Collection<CrudRepository>
	// repositories) {
	// return new DbCountRunner(repositories) {
	// @Override
	// public void run(String... args) throws Exception {
	// logger.info("Manually Declared DbCountRunner");
	// }
	// };
	// }
}