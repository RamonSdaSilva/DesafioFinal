package redesocial.api.domain.Postagem;

public record DadosListagemPostagem(long id, String foto, String descricao) {

    public DadosListagemPostagem(postagem Postagem) {
        this(Postagem.getId(), Postagem.getFoto(), Postagem.getDescricao());
    }

}
