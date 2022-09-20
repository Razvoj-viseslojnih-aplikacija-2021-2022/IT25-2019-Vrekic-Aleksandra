package rppstart.ctrls;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rppstart.jpa.Preduzece;
import rppstart.jpa.Radnik;
import rppstart.jpa.Sektor;
import rppstart.repository.PreduzeceRepository;
import rppstart.repository.RadnikRepository;
import rppstart.repository.SektorRepository;

@CrossOrigin
@RestController
@Api(tags = {"Sektor CRUD operacije"})
public class SektorRestController {
	
	@Autowired
	private SektorRepository sektorRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PreduzeceRepository preduzeceRepository;
	
	@GetMapping("sektor")
	@ApiOperation(value = "Vraca kolekciju svih sektora iz baze podataka")
	public Collection<Sektor> getSektori() {
		return sektorRepository.findAll();
	}
	
	@GetMapping("sektor/{id}")
	@ApiOperation(value = "Vraca sektor na osnovu prosledjenog ID-ija")
	public Sektor getSektor(@PathVariable("id") Integer id) {
		return sektorRepository.getOne(id);
	}
	
	@GetMapping("sektoriZaPreduzeceID/{id}")
	@ApiOperation(value = "Vraca sve sektore na osnovu prosledjenog ID-ija preduzeca")
	public Collection<Sektor> getSektoriByPreduzece(@PathVariable int id){
		Preduzece p = preduzeceRepository.getOne(id);
		return sektorRepository.findByPreduzece(p);
	}
	
	@GetMapping("sektorNaziv/{naziv}")
	@ApiOperation(value = "Vraca sektore na osnovu prosledjenog naziva sektora")
	public Collection<Sektor> getSektorByNaziv(@PathVariable("naziv") String naziv) {
		return sektorRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	
	@PostMapping("sektor")
	@ApiOperation(value = "Dodaje novi sektor u bazu podataka")
	public ResponseEntity<Sektor> insertSektor(@RequestBody Sektor sektor) {
		if (!sektorRepository.existsById(sektor.getId())) {
			sektorRepository.save(sektor);
			return new ResponseEntity<Sektor>(HttpStatus.OK);
		}
		return new ResponseEntity<Sektor>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("sektor")
	@ApiOperation(value = "Update-uje sektor iz baze podataka")
	public ResponseEntity<Sektor> updateSektor(@RequestBody Sektor sektor) {
		if (sektorRepository.existsById(sektor.getId())) {
			sektorRepository.save(sektor);
			return new ResponseEntity<Sektor>(HttpStatus.OK);
		}
		return new ResponseEntity<Sektor>(HttpStatus.CONFLICT);
	}
	
	@Transactional
	@DeleteMapping("sektor/{id}")
	@ApiOperation(value = "Brise sektor iz baze podataka (na osnovu prosledjenog ID-ija)")
	public ResponseEntity<Sektor> deleteSektor(@PathVariable("id") Integer id) {
		if (sektorRepository.existsById(id)) {
			
			jdbcTemplate.execute("DELETE FROM radnik where sektor=" + id);
			sektorRepository.deleteById(id);
			
			if (id == -100) 
			{
				jdbcTemplate.execute("insert into \"sektor\"(\"id\", \"naziv\", \"oznaka\", \"preduzece\")"
						+ "values (-100, 'testNaziv', 'NN' , 1 )");
			}
			
			return new ResponseEntity<Sektor>(HttpStatus.OK);
		}
		return new ResponseEntity<Sektor>(HttpStatus.NO_CONTENT);
	}

}
