package rppstart.ctrls;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HelloRestController {

	@RequestMapping("/")
	public String helloWorld() {
	return "Hello World!";
	}

}
