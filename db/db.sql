create table cliente (
    id int primary key auto_increment,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    nombreMas varchar(100) not null,
    tipoMas varchar(100) not null

)

create table locales (
    id int primary key auto_increment,
    distrito varchar(100) not null,
    direccion varchar(100) not null,
    horario varchar(100) not null

)

create table servicio (
    id int primary key auto_increment,
    nombre varchar(100) not null,
    costo varchar(100) not null,
    descripcion varchar(100) not null
)

create table cita (
    id int primary key auto_increment,
    idcliente int,
    tipoMas varchar(100) not null,
    idservicio int,
    idLocal int
)
