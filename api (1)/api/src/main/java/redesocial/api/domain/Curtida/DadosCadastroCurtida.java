package redesocial.api.domain.Curtida;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroCurtida(
        @NotBlank
        String username
) {
}
