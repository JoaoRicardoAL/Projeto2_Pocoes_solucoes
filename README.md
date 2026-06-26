# 🧪 Poções e Soluções

Este projeto é uma aplicação web Full-Stack desenvolvida para a disciplina de Introdução ao Desenvolvimento Web. Trata-se de uma plataforma de e-commerce e um sistema de gerenciamento para a loja de poções fictícia de Innabelle Merigold.

O sistema conta com uma vitrine virtual para clientes e um painel administrativo restrito para o gerenciamento (cadastro, listagem e remoção) dos produtos.

---

## Stack 

O projeto adota uma arquitetura separada em Web Service (API) e Interface do Usuário (Cliente), utilizando as seguintes tecnologias:

### Back-end (Web Service)
* **Node.js** com framework **Express.js** para roteamento da API.
* **Sequelize ORM** para modelagem e comunicação com o banco de dados.
* **SQLite** operando em modo memória (`:memory:`).

### Front-end (Interface)
* **React** (inicializado via **Vite**) para componentização e reatividade da interface.
* **React Router Dom** para o roteamento e navegação fluida entre as páginas (Single Page Application).
* **Axios** para requisições assíncronas (AJAX) consumindo o Web Service.
* **CSS Nativo** garantindo uma identidade visual com paleta de cores escuras e a tipografia *Gill Sans*.

---

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 18 ou superior recomendada)
* NPM (Gerenciador de pacotes do Node)

---

## 🚀 Como Executar o Projeto

Como a aplicação é dividida em dois ecossistemas (Back-end e Front-end), é necessário iniciar dois servidores simultaneamente. Siga o passo a passo abaixo:

### 1. Iniciando o Back-end (API)

1. Abra o seu terminal e navegue até a pasta do back-end:
   ```bash
   cd backend
   ```
2. Instale as dependencias
   ```bash
   npm install
   ```
3. Inicie o servidor
   ```bash
   npm start
   ```
### Iniciando o Front-end
1. Abra uma nova aba no terminal e vá até a pasta frontend
   ```bash
   cd frontend
   ```
2. Instale as dependencias
   ```bash
   npm install
   ```
3. Inicie o servidor
   ```bash
   npm run dev
   ```
4. Abra o localhost, em seu navegador, que é mostrado no terminal
