package redesocial.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import redesocial.api.domain.Postagem.DadosAtualizacaoPostagem;
import redesocial.api.domain.Usuarios.DadosAtualizacaoUsuario;
import redesocial.api.domain.Usuarios.DadosCadastroUsuario;
import redesocial.api.domain.Usuarios.Usuario;
import redesocial.api.domain.Usuarios.UsuarioRepository;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    @Transactional
    public void Usuario(@RequestBody @Valid DadosCadastroUsuario dados) {
        repository.save(new Usuario(dados));
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizacaoUsuario dados){
        var usuario = repository.getReferenceById(dados.id());
        usuario.atualizarUsuarios(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}
