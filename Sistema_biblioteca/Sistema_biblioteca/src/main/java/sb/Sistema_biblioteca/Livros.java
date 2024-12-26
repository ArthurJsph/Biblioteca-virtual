package sb.Sistema_biblioteca;

import jakarta.persistence.*;
import org.hibernate.annotations.GeneratorType;
import org.hibernate.annotations.IdGeneratorType;
import sb.Sistema_biblioteca.Controllers.LivroController;

@Entity
@Table(name = "livros")
public class Livros extends LivroController {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String titulo;
    private String autor;

    @Column(name = "ano_lancamento")
    private String anoLancamento;
    private String editora;
    private String descricao;
    private String imagem;

    public Livros() {
    }



    public Livros(long id, String titulo, String autor, String anoLancamento, String editora, String descricao, String imagem) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoLancamento = anoLancamento;
        this.editora = editora;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(String anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }



}
