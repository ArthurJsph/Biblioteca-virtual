package sb.Sistema_biblioteca.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sb.Sistema_biblioteca.Livros;
import sb.Sistema_biblioteca.Services.LivroService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/livros")
public class LivroController{
    @Autowired
    private LivroService livroService;

    // Aqui deverá ter os métodos de CRUD
    // GET, POST, PUT, DELETE

    @GetMapping
    public ResponseEntity<List<Livros>> listarLivros() {
        List<Livros> livros = livroService.findAll();
        return ResponseEntity.ok(livros);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livros> buscarLivroPorId(@PathVariable Long id) {
        Optional<Livros> livro = livroService.findById(id);
        return livro.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Livros> adicionarLivro(@RequestBody Livros livro) {
        Livros novoLivro = livroService.save(livro);
        return ResponseEntity.ok(novoLivro);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable Long id) {
        if (livroService.findById(id).isPresent()) {
            livroService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
