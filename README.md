## Screenshots

![App Screenshot](https://img1.pnghut.com/1/4/7/5CXD0EnpdZ/expressjs-logo-text-serverside-runtime-system.jpg)




# Desafio Ambisis

Este repositório contém os desafios feitos pela proway para a empresa Ambisis.


## Tecnologias
+ JavaScript
+ NodeJS
+ Express
+ MySQL
+ Sequelize
+ Dotenv
+ Nodemon


## Rodando localmente

Clone o projeto

```bash
  gh repo clone victorfeldhaus/desafioNode
  
```

Entre no diretório do projeto

```bash
  cd desafioNode
```

Instale as dependências do projeto

```bash
  npm install
```

Antes de executar o projeto baixe as ferramentas do Workbench MySQL
https://dev.mysql.com/downloads/workbench/

O WampServer
https://www.wampserver.com/en/

E o Insomnia https://insomnia.rest/download para fazer as requisições

Após instalar essa ferramentas, importar o dump do banco de dados e suas tabelas.
O dump está na diretório do projeto como Dumpgest.sql

Abra o WampServer e o Workbench MySQL

Execute o projeto com nodemon utilizando esse Script

```bash
  npm run dev
```


## Documentação

Abra o Insomnia

Rota para as Empresas

Para listar as empresas, crie uma método get com http://localhost:9000/empresas

```bash
  
	[
	{
		"id": 8,
		"razaosocial": "silvassea",
		"cnpj": "29121329689",
		"cep": "89062660",
		"cidade": "Bluoinsu",
		"bairro": "fifggljs",
		"complemento": "ruass tal"
	},
	{
		"id": 9,
		"razaosocial": "Ambisis",
		"cnpj": "12345678912241",
		"cep": "12345678",
		"cidade": "Blumenau",
		"bairro": "Itoupava",
		"complemento": null
	},
	{
		"id": 10,
		"razaosocial": "TAKAI",
		"cnpj": "123456789",
		"cep": "9060123",
		"cidade": "curitiba",
		"bairro": "seila",
		"complemento": "nem ai"
	}
]
```


Para cadastrar uma empresa, utilize esse tipo de entrada em JSON para cadastrar a empresa
e o método post http://localhost:9000/empresa/insert

```bash
  {
	"razaosocial": "Ambisis",
	"cnpj": "123456789",
	"cep": "9060123",
	"cidade": "Blumenau",
	"bairro": "Itoupava Seca",
	"complemento": "Centro"
}
```

Para a atualizar uma empresa, utilize o método put http://localhost:9000/empresa/update/id
e alterarando os dados:
```bash
  {
	"razaosocial": "Blukit",
	"cnpj": "987654321",
	"cep": "89060",
	"cidade": "Paraná",
	"bairro": "Pontal",
	"complemento": "Praia"
}
```

Retornando essa mensagem:

```bash
  {
  
	"Empresa atualizada com sucesso!"
}
```

Para deletar uma empresa, utilize o método delete http://localhost:9000/empresa/delete/id


```bash
  {
  
	"message": "Empresa Deletada!"
}
```


Rota para as Licenças

Para listar as licenças, crie uma método get com http://localhost:9000/licencas

```bash
  [
	{
		"id": 5,
		"empresas": 4,
		"numero": "565sge9th",
		"orgaoambiental": "AMsBUS",
		"emissao": "2009-03-04",
		"validade": "2019-08-09",
		"empresa": null
	}
]
```


Para cadastrar uma licença, utilize esse tipo de entrada em JSON para cadastrar a empresa
e o método post http://localhost:9000/licenca/insert

```bash
  {
	"empresas": 4,
	"numero": "565sge9th",
	"orgaoambiental": "AMsBUS",
	"emissao": "2009-03-04",
	"validade": "2019-08-09"
}
```

Para a atualizar uma licença, utilize o método put http://localhost:9000/licenca/update/id
e alterarando os dados:
```bash
  {
	"empresas": 4,
	"numero": "565sge9th",
	"orgaoambiental": "AMsBUS",
	"emissao": "2009-03-04",
	"validade": "2019-08-09"
}
```

Retornando essa mensagem:

```bash
  {
  
	"Licença atualizada com sucesso!"
}
```

Para deletar uma empresa, utilize o método delete http://localhost:9000/licenca/delete/id


```bash
  {
  
	"message": "Licença Deletada!"
}
```




## Autor
 Feito por Victor Mafra Feldhaus



