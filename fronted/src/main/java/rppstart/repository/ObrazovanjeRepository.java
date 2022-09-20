package rppstart.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rppstart.jpa.Obrazovanje;

public interface ObrazovanjeRepository extends JpaRepository<Obrazovanje, Integer> {

	Collection<Obrazovanje> findByNazivContainingIgnoreCase(String naziv);
}
