package redesocial.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import redesocial.api.domain.Amigos.Amigo;
import redesocial.api.domain.Amigos.AmigosRepository;
import redesocial.api.domain.Amigos.DadosCadastroAmigo;
import redesocial.api.domain.Amigos.DadosListagemAmigos;

import java.util.List;

@RestController
@RequestMapping("/Amigos")
@CrossOrigin(origins = "*")
public class AmigosController {

    @Autowired
    private AmigosRepository repository;

    @PostMapping
    @Transactional
    public void Amigos(@RequestBody @Valid DadosCadastroAmigo dados) {
        repository.save(new Amigo(dados));
    }

    @GetMapping
    public List<DadosListagemAmigos> listar() {
        return repository.findAll().stream().map(DadosListagemAmigos::new).toList();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}