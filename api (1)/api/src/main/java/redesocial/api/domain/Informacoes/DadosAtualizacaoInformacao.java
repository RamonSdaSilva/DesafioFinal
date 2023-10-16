package redesocial.api.domain.Informacoes;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoInformacao(
        @NotNull
        Long id,
        String nome,
        String username,
        String descricao,
        String telefone,
        String foto) {
}
