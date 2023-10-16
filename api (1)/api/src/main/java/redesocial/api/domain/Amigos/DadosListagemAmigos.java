package redesocial.api.domain.Amigos;

import redesocial.api.domain.Informacoes.informacao;

public record DadosListagemAmigos(long id, String username, String descricao, String foto) {
    public DadosListagemAmigos(Amigo Amigo) {
        this(Amigo.getId(), Amigo.getUsername(), Amigo.getDescricao(), Amigo.getFoto());
    }
}
