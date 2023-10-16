package redesocial.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import redesocial.api.domain.Informacoes.*;
import redesocial.api.domain.Postagem.DadosAtualizacaoPostagem;
import redesocial.api.domain.Postagem.DadosListagemPostagem;

import java.util.List;

@RestController
@RequestMapping("/informacao")
@CrossOrigin(origins = "*")
public class InformacoesController {

    @Autowired
    private informacaoRepository repository;

    @PostMapping
    @Transactional
    public void Informacao(@RequestBody @Valid DadosCadastroInformacao dados) {
        repository.save(new informacao(dados));
    }

    @GetMapping
    public List<DadosListagemInformacao> listar() {
        return repository.findAll().stream().map(DadosListagemInformacao::new).toList();
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizacaoInformacao dados){
        var informacao = repository.getReferenceById(dados.id());
        informacao.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}
