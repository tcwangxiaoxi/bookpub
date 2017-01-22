package groovy

import org.springframework.stereotype.Component
import org.test.bookpub.groovy.GroovySample

class GroovyManagerSample implements GroovySample {

	String name

	@Override
	public String sayHello() {
		return "sayHello:$name"
	}
}
