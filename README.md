# StepStyle E-commerce - Projeto Next.js

Este é um projeto de e-commerce desenvolvido com **Next.js**, focado na venda de calçados de diversas marcas e modelos. A aplicação oferece funcionalidades completas como catálogo de produtos, carrinho de compras, sistema de pagamento seguro e gestão de pedidos, evoluindo a partir de um conceito inicial de plataforma de publicação de livros.

## Tecnologias Utilizadas

### Frontend:
- **Next.js**: Framework para desenvolvimento do frontend, com suporte a server-side rendering.
- **Tailwind CSS**: Framework utilitário para estilização.
- **SweetAlert2**: Para exibição de alertas e notificações.

### Backend:
- **Node.js**: Plataforma para a construção do backend e APIs.
- **MongoDB**: Banco de dados NoSQL usado para gerenciar usuários, pedidos e produtos.
- **Stripe**: Integração com API de pagamentos para processar transações de maneira segura e eficiente.

### Ferramentas:
- **Visual Studio Code**: IDE utilizada para o desenvolvimento do projeto.
- **GitHub**: Repositório para controle de versão e colaboração entre desenvolvedores.

## Funcionalidades Principais

- **Catálogo de Produtos**: Permite a navegação por diferentes marcas e modelos de calçados.
- **Carrinho de Compras**: Adicionar, remover e atualizar produtos no carrinho.
- **Sistema de Pagamento**: Processamento seguro de pagamentos via Stripe.
- **Gestão de Pedidos**: Acompanhe o status dos pedidos e gerencie os detalhes de cada compra realizada.

## Estruturação do Projeto

O projeto foi desenvolvido de forma modular, com uma clara separação entre frontend, backend e os principais componentes. O progresso do desenvolvimento seguiu as seguintes etapas:

- **Semana 1**: Início do projeto inspirado em uma plataforma de publicação de livros, com definição das funcionalidades principais e prototipação inicial do frontend.
- **Semana 2**: Mudança no escopo do projeto para um e-commerce de calçados. Início da integração com APIs e reestruturação das pastas.
- **Semana 3**: Criação do carrinho de compras e implementação do sistema de pagamento.
- **Semana 4**: Enfrentei dificuldades técnicas devido a problemas de conexão com a internet, o que impactou o progresso do projeto. No entanto, continuei com a estruturação das pastas e a integração das tecnologias, embora não tenha conseguido avançar muito devido à falta de acesso.
- **Semanas 5 e 6**: Finalização das funcionalidades principais, incluindo integração com o banco de dados e gestão de pedidos.
- **Semana 8**: Conclusão do projeto com testes, ajustes de design e criação de páginas adicionais.

## Como Começar

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/stepstyle-ecommerce.git
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install autoprefixer micro mongoose next postcss react react-dom react-slick slick-carousel stripe sweetalert2 tailwind-scrollbar-hide tailwindcss use-local-storage-state
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## Roadmap Futuro

Pensando no roadmap da plataforma e nas soluções que iremos implementar, definimos uma rota clara para as próximas etapas de evolução do projeto:

### Curto Prazo (3 meses)
- **Autenticação por e-mail**: Implementação de autenticação para clientes que estão realizando compras, melhorando a experiência e segurança.
- **Emissão automática de notas fiscais**: Geração automática de notas fiscais para cada compra, facilitando o controle para os usuários.
- **Validação de CPF**: Integração com a API da Receita Federal para validação de CPF, garantindo maior segurança durante o processo de compra.

### Médio Prazo (9 meses)
- **Plataforma de Gestão de Vendas**: Desenvolvimento de uma interface dedicada ao proprietário do e-commerce, permitindo:
  - Gerar relatórios de vendas em PDF ou CSV.
  - Adicionar e gerenciar novos produtos (imagens, preços, categorias).
  - Gerenciar estoque.
  - Administrar um programa de fidelidade para clientes recorrentes.

### Longo Prazo (1 ano)
- **Painel de Controle Interativo**: Desenvolvimento de dashboards completos e gráficos interativos que forneçam uma visão detalhada do desempenho do e-commerce, incluindo:
  - Análises de vendas.
  - Performance de produtos.
  - Insights sobre o comportamento dos clientes.
