create table postagens(
    id bigint not null auto_increment,
    descricao varchar(255) not null,
    foto text not null,

    primary key(id)
)