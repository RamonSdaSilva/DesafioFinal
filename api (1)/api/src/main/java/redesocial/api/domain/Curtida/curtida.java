package redesocial.api.domain.Curtida;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import redesocial.api.domain.Postagem.DadosAtualizacaoPostagem;
import redesocial.api.domain.Postagem.DadosCadastroPostagem;

@Table(name = "Curtida")
@Entity(name = "curtida")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class curtida {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String usename;

    public curtida(DadosCadastroCurtida dados) {
        this.usename = dados.username();
    }
}
