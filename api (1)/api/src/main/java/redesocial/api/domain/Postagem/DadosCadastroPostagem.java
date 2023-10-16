package redesocial.api.domain.Postagem;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.URL;

public record DadosCadastroPostagem(
        @NotBlank
        String descricao,
        @NotBlank
        @URL
        String foto) {
}
