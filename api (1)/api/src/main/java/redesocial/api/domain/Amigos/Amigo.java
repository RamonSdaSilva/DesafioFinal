package redesocial.api.domain.Amigos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "Amigos")
@Entity(name = "Amigo")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Amigo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String descricao;
    private String foto;

    public Amigo(DadosCadastroAmigo dados) {
        this.username = dados.username();
        this.descricao = dados.descricao();
        this.foto = dados.foto();
    }

}
