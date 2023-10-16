create table informacao(

  id bigint not null auto_increment,
  nome varchar(100) not null,
  username varchar(255) not null,
  descricao text,
  telefone varchar(255),
  foto Text not null,


  primary key(id)

);