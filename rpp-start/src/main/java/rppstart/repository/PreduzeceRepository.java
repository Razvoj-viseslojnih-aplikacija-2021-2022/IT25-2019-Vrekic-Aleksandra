package rppstart.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rppstart.jpa.Preduzece;


public interface PreduzeceRepository extends JpaRepository<Preduzece, Integer> {

	Collection<Preduzece> findByNazivContainingIgnoreCase(String naziv);
}
