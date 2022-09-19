package rppstart.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rppstart.jpa.Preduzece;
import rppstart.jpa.Radnik;
import rppstart.jpa.Sektor;

public interface SektorRepository extends JpaRepository<Sektor, Integer>{

	Collection<Sektor> findByNazivContainingIgnoreCase(String naziv);
	Collection<Sektor> findByPreduzece(Preduzece p);
}
