package redesocial.api.domain.Amigos;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroAmigo(
        @NotBlank
        String username,
        @NotBlank
        String descricao,
        @NotBlank
        String foto
) {
}
