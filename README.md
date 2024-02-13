
# Dasboard Bonfire - Projeto Gentileza

A dashboard em questão é um painel de controle destinado ao gerenciamento de atividades executadas no âmbito do aplicativo correspondente. Sua funcionalidade principal reside na capacidade de alimentar de forma simples e intuitiva todo o ecossistema vinculado ao aplicativo. O design adotado é minimalista e de fácil adaptação, visando proporcionar uma experiência de uso descomplicada.
Embora tenha sido concebida primariamente para aplicativos educacionais, essa dashboard pode ser ajustada para projetos que envolvam o processamento de dados de usuários. Sua concepção tem como propósito permitir que o próprio cliente a alimente, o que resulta em uma interface de fácil compreensão e utilização.





## Link do projeto

[Replit](https://c9c41f47-52b8-4f3e-b64d-4b01b1946121-00-2fxlvjvu3dqbb.picard.replit.dev/)

[Protótipo - Figma](https://www.figma.com/proto/QW2kHbmSPI9mccO1CSCGEm/projeto-gentileza?type=design&node-id=970-2039&t=bJDhjk83s82qQPAS-0&scaling=min-zoom&page-id=965%3A31)



## Usado por

Esse projeto é usado pelas seguintes empresas:

- Bonfire

O projeto em questão representa uma iniciativa de natureza privada integrante da entidade empresarial previamente mencionada. Sua principal operação envolve a comercialização de aplicativos destinados a outras empresas que decidem adquirir tais soluções tecnológicas. No contexto desse processo, as empresas adquirentes dos aplicativos também recebem uma dashboard correspondente. Essa dashboard que está sendo documentada é referente a um do apps disponivéis e ela é instrumentalizada para efetuar o controle e a alimentação do aplicativo adquirido, proporcionando um meio eficaz para gerenciar e otimizar o desempenho da aplicação.


## Funcionalidades

- Cadastrar usuários
- Editar Usuários
- Copiar ID's
- Criar avisos 
- Editar avisos
- Deletar avisos
- Criar investimento
- Deletar investimento
- Editar investimento
- Renderização de todos os usuário/ avisos/ investimento
- Necessidade de tocken para acessar as páginas
- Redirecionamento para página de erro, em caso de url incorreta
- Redirecionamento para tela de login caso tente acessar outras páginas sem passar por ela
- Alertas especificos para guiar os usuários
- Loader para esperar o carregamento de dados da api
- Filtros de dados nas páginas que renderizam muitos dados



## Tecnologias

- react
- styled-components
- react-icons
- vite
- react-google-charts
- axios
- sweetalert2
- templete personalizado
- react-router-dom
- Replit




## Rotas da dashboard


### Rota: /
Descrição: A primeira página visualizada é a de login. Através dessa página, realizamos a filtragem para determinar quem terá acesso ao painel de controle. A validação ocorre por meio do número de matrícula e senha, permitindo a identificação do cargo da pessoa. Se o cargo estiver em conformidade com as permissões necessárias para alimentar o ecossistema, a pessoa receberá livre acesso à dashboard.


### Rota: /dashboard
Descrição: Esta é a página principal do sistema, geralmente contendo uma visão geral das principais métricas e informações relevantes.


### Rota: /users
Descrição: Nesta página, são exibidos todos os usuários cadastrados no sistema. Pode incluir detalhes como nome, cargo, e outras informações pertinentes.

### Rota: /create-user
Descrição: Aqui, os administradores têm a capacidade de adicionar novos usuários ao sistema. Formulários e campos podem ser disponibilizados para inserção de informações como nome, numéro de matrícula, função, etc.

### Rota: /notifications
Descrição: A página de avisos exibe uma lista de notificações importantes. Cada aviso pode conter informações como título, descrição e talvez uma data de expiração.

Componente de Edição: Cada aviso pode ser editado individualmente, possivelmente permitindo que o administrador faça alterações no título, descrição ou outras propriedades do aviso.

### Rota: /create-notification
Descrição: Existe a capacidade de criar novos avisos. Um formulário é fornecido para inserir informações como título e descrição do aviso.


### Rota: /investiments

Descrição: Exibe uma lista de todos os investimentos criados. Informações como o nome do investimento e a descrição de como ele funciona é exibida nessa tela.
.

### Rota: /create-investiments

Descrição: Página dedicada à criação de novos investientos. Aqui os administradores podem criar novos investimentos para que seja aplicado no app da gentileza. Aqui é necessário colocar informações como o nome do investimento, quanto ele rende por dia e uma descrição detalhada sobre o investiemento, como por exemplo, se é de alto ou baixo risco, como ele vai funcionar e etc.## Template 
Template pronto, que pode ser personalizado de acordo com suas necessidades.

## Funcionalidades do templete 

- Vite configurado (build, port, .env, scripts)
- Theme Provider
- Global Styles
- Arquivo de configuração geral (title, baseURL)
- Rotas configuradas
- Rota de erro configurada
- Estrutura de pastas
- Instancia do axios


## Autor do Template

- [@darknx](https://github.com/darknx)


## Autores da Dasboard

- [@Gabi-Viana](https://github.com/Gabi-Viana)
- [@adrianBonfire](https://github.com/adrianBonfire)


## Dashboard pertencente à:

- [@Projeto-Bonfire](https://github.com/Projeto-Bonfire)

