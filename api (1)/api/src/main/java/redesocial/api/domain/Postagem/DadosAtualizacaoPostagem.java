package redesocial.api.domain.Postagem;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoPostagem(
        @NotNull
        Long id,
        String descricao,
        String foto) {
}
