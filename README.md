# Get A Pet - Sistema de Adoção
O Get A Pet é uma aplicação robusta desenvolvida para conectar pessoas que desejam adotar animais a pets que precisam de um novo lar. É um projeto Full Stack que abrange desde a criação de uma API RESTful até uma interface de usuário dinâmica.
> [!TIP]
> O sistema utiliza JWT (JSON Web Tokens) para garantir a segurança das rotas e a autenticação dos usuários.
## Tecnologias Utilizadas

- **Front-end:** React.js, React Router e Context API para gerenciamento de usuários.
- **Back-end:** Node.js com Express.
- **Banco de Dados:** MongoDB com Mongoose para modelagem de dados.
- **Upload de Imagens:** Multer para processamento de fotos dos pets.

## Funcionalidades Principais
- [x] Sistema de login e registro de usuários
- [x] Upload e edição de fotos de perfil e dos pets
- [x] Filtro de pets disponíveis na página inicial
- [x] Painel "Meus Pets" para gerenciar anúncios
- [x] Fluxo de agendamento de visitas para adoção
- [ ] Notificações em tempo real para o adotante
## Como Executar o Projeto
O projeto está dividido em duas partes: *backend* e *frontend*.
```bash

1. Clone o repositório
git clone https://github.com/RicardoFiorini/projeto-adocao.git
2. Configure o Backend
cd backend
npm install
npm start # Roda na porta 5000
3. Configure o Frontend
cd ../frontend
npm install
npm start # Roda na porta 3000

```
## Principais Rotas da API
| Método | Rota | Ação |
| --- | --- | --- |
| POST | /users/register | Cria novo usuário |
| POST | /pets/create | Cadastra um pet |
| GET | /pets | Lista todos os pets |
| PATCH | /pets/schedule/:id | Agenda visita de adoção |
## Conceitos Aplicados
*Este projeto foi fundamental para consolidar o entendimento sobre como conectar um front-end moderno a uma API própria, lidando com persistência de dados, relacionamentos entre documentos no MongoDB e proteção de rotas privadas.*
