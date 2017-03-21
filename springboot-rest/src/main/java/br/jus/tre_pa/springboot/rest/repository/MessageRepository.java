package br.jus.tre_pa.springboot.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.jus.tre_pa.springboot.rest.domain.Message;
import org.springframework.data.jpa.repository.Query;       
import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
	
}