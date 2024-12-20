package sb.Sistema_biblioteca.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sb.Sistema_biblioteca.Livros;

@Repository
public interface LivroRepository extends JpaRepository<Livros, Long> {
    //Aqui deverá ter os dados e metodos do banco de dados
}
