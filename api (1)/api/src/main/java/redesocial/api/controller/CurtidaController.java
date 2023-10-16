package redesocial.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import redesocial.api.domain.Curtida.CurtidaRepository;
import redesocial.api.domain.Curtida.DadosCadastroCurtida;
import redesocial.api.domain.Curtida.curtida;

@RestController
@RequestMapping("/Curtida")
@CrossOrigin(origins = "*")
public class CurtidaController {

    @Autowired
    private CurtidaRepository repository;

    @PostMapping
    @Transactional
    public void Curtida(@RequestBody @Valid DadosCadastroCurtida dados) {
        repository.save(new curtida(dados));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}
