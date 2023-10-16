package redesocial.api.domain.Postagem;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "postagens")
@Entity(name = "postagem")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class postagem {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String descricao;
    private String foto;

    public postagem(DadosCadastroPostagem dados) {
        this.descricao = dados.descricao();
        this.foto = dados.foto();
    }

    public void atualizarInformacoes(DadosAtualizacaoPostagem dados) {
        if (dados.foto() != null){
            this.foto = dados.foto();
        }
        if (dados.descricao() != null){
            this.descricao = dados.descricao();
        }
    }
}
