package rppstart.ctrls;

import java.util.Collection;

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
import rppstart.jpa.Obrazovanje;
import rppstart.jpa.Preduzece;
import rppstart.jpa.Radnik;
import rppstart.jpa.Sektor;
import rppstart.repository.ObrazovanjeRepository;
import rppstart.repository.RadnikRepository;
import rppstart.repository.SektorRepository;

@CrossOrigin
@RestController
@Api(tags = {"Radnik CRUD operacije"})
public class RadnikRestController {
	
	@Autowired
	private RadnikRepository radnikRepository;
	
	@Autowired
	private SektorRepository sektorRepository;
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@GetMapping("radnik")
	@ApiOperation(value = "Vraca kolekciju svih radnika iz baze podataka")
	public Collection<Radnik> getRadnici() {
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/{id}")
	@ApiOperation(value = "Vraca radnika na osnovu prosledjenog ID-ija")
	public Radnik getRadnik(@PathVariable("id") Integer id) {
		return radnikRepository.getOne(id);
	}
	
	
	@GetMapping("radniciZaSektorID/{id}")
	@ApiOperation(value = "Vraca radnike na osnovu prosledjenog ID-ija sektora")
	public Collection<Radnik> getRadniciBySektor(@PathVariable int id){
		Sektor s = sektorRepository.getOne(id);
		return radnikRepository.findBySektor(s);
	}
	
	@GetMapping("radniciZaSektorIDPrezime/{id}")
	@ApiOperation(value = "Vraca radnike na osnovu prosledjenog ID-ija sekotra sortirane po prezimenu")
	public Collection<Radnik> getRadniciBySektorPrz(@PathVariable int id){
		Sektor s = sektorRepository.getOne(id);
		return radnikRepository.findBySektorOrderByPrezime(s);
	}
	
	@GetMapping("radnikPrezime/{prezime}")
	@ApiOperation(value = "Vraca radnike na osnovu prosledjenog prezimena")
	public Collection<Radnik> getRadnikByPrezime(@PathVariable("prezime") String prezime) {
		return radnikRepository.findByPrezimeContainingIgnoreCase(prezime);
	}
	
	@PostMapping("radnik")
	@ApiOperation(value = "Dodaje novog radnika u bazu podataka")
	public ResponseEntity<Radnik> insertRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		return new ResponseEntity<Radnik>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("radnik")
	@ApiOperation(value = "Update-uje radnika iz baze podataka")
	public ResponseEntity<Radnik> updateRadnik(@RequestBody Radnik radnik){
		if(radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Radnik>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("radnik/{id}")
	@ApiOperation(value = "Brise radnika iz baze podataka (na osnovu prosledjenog ID-ija)")
	public ResponseEntity<Radnik> deleteRadnik(@PathVariable("id") Integer id) {
		if (radnikRepository.existsById(id)) {
			
			radnikRepository.deleteById(id);
			
			if (id == -100) 
			{
				jdbcTemplate.execute("insert into \"radnik\"(\"id\", \"ime\", \"prezime\", \"broj_lk\", \"obrazovanje\", \"sektor\")"
						+ "values (-100, 'testIme', 'testPrezime' , 101010201, 1, 1 )");
			}
			
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
	}
}
