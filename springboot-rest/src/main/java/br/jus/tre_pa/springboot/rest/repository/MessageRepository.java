package br.jus.tre_pa.springboot.rest.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.jus.tre_pa.springboot.rest.domain.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
	
	@Query("select m from Message m where m.message = :massage")
	List<Message> findByMessage(@Param("message") String message);
	
}