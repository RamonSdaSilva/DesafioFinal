package redesocial.api.domain.Informacoes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import redesocial.api.domain.Postagem.DadosAtualizacaoPostagem;

@Table(name = "informacao")
@Entity(name = "informacao")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class informacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String username;
    private String descricao;
    private String telefone;
    private String foto;

    public informacao(DadosCadastroInformacao dados) {
        this.nome = dados.nome();
        this.username = dados.username();
        this.descricao = dados.descricao();
        this.telefone = dados.telefone();
        this.foto = dados.foto();
    }

    public void atualizarInformacoes(DadosAtualizacaoInformacao dados) {
        if (dados.nome() != null){
            this.nome = dados.nome();
        }
        if (dados.username() != null) {
            this.username = dados.username();
        }
        if (dados.descricao() != null){
            this.descricao = dados.descricao();
        }
        if (dados.telefone() != null){
            this.telefone = dados.telefone();
        }
        if (dados.foto() != null){
            this.foto = dados.foto();
        }
    }

}
