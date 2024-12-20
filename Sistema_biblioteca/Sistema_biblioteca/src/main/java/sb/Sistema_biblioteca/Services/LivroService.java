package sb.Sistema_biblioteca.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sb.Sistema_biblioteca.Livros;
import sb.Sistema_biblioteca.Repositories.LivroRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {
    @Autowired
    private LivroRepository livroRepository;

    //Método para fazer uma busca de todos os livros e retornar uma lista
    public List<Livros> findAll(){
        return livroRepository.findAll();
    }
    public Livros save(Livros livro) {
        return livroRepository.save(livro);
    }

    public void deleteById(Long id) {
        livroRepository.deleteById(id);
    }

    public Optional<Livros> findById(Long id) {
        return livroRepository.findById(id);
    }
}
