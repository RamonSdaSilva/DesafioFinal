package redesocial.api.controller;;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import redesocial.api.domain.Postagem.*;

import java.util.List;

@RestController
@RequestMapping("/postagem")
@CrossOrigin(origins = "*")
public class PostagemController {

    @Autowired
    private PostagemRepository repository;

    @PostMapping
    @Transactional
    public void Postagem(@RequestBody @Valid DadosCadastroPostagem dados) {
        repository.save(new postagem(dados));
    }

    @GetMapping
    public List<DadosListagemPostagem> listar() {
        return repository.findAll().stream().map(DadosListagemPostagem::new).toList();
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizacaoPostagem dados){
        var postagem = repository.getReferenceById(dados.id());
        postagem.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}

