package redesocial.api.domain.Informacoes;

import redesocial.api.domain.Postagem.postagem;

public record DadosListagemInformacao(long id, String nome, String username, String descricao, String telefone, String foto) {
    public DadosListagemInformacao(informacao informacao) {
        this(informacao.getId(), informacao.getNome(), informacao.getUsername(), informacao.getDescricao(), informacao.getTelefone(), informacao.getFoto());
    }
}
