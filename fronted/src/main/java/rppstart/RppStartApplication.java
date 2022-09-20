package rppstart;

import java.util.Arrays;

import org.apache.catalina.core.ApplicationContext;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
/*import org.springframework.context.annotation.Bean;*/
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@SpringBootApplication

public class RppStartApplication {

	public static void main(String[] args) {
		SpringApplication.run(RppStartApplication.class, args);
	}
}
