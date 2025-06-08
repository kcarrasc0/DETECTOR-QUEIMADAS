# 🔥 Detector de Fogo – Projeto Educacional

Um sistema web que utiliza **visão computacional** para identificar sinais de fogo em tempo real via **webcam**, com intuito de conscientizar sobre o uso da tecnologia no **combate às queimadas** e **crises climáticas**. Desenvolvido como projeto social e educacional com foco em impacto social e sustentabilidade.

## 📸 Demonstração

![Dashboard](./src/assets/screenshots/dashboard.png)
![Detecção](./src/assets/screenshots/detection.png)

---

## 🧠 Objetivos

- Mostrar na prática como a **tecnologia pode salvar vidas** e preservar o meio ambiente.
- Ensinar alunos sobre **machine learning, visão computacional e front-end moderno**.
- Desenvolver uma solução simples, mas funcional, de **detecção de incêndios**.
- Criar uma **interface intuitiva** com alertas visuais e possibilidade de expansão futura.

---

## 🛠 Tecnologias Utilizadas

### Front-End

- ⚛️ [React.js](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 CSS Modules (responsivo)
- 📊 [Recharts](https://recharts.org/) (gráficos)
- 🎥 getUserMedia (webcam nativa)
- 📦 React Router DOM

### Back-End

- 🌐 [Node.js](https://nodejs.org/)
- 🔒 [Express](https://expressjs.com/)
- 🧠 Autenticação com token (JWT em breve)
- 🔒 Validação de credenciais

---

## 🚀 Funcionalidades

| Página             | Descrição                                                                 |
|--------------------|--------------------------------------------------------------------------|
| 🔐 Login            | Autenticação com e-mail e senha                                          |
| 📝 Cadastro         | Registro de novos usuários                                               |
| 📊 Dashboard        | Visualização de dados de detecção e gráficos informativos                |
| 🔍 Detecção de Fogo | Acesso à câmera, análise de imagem via filtro RGB, e alerta visual       |
| 📁 Exportação       | (Em breve) Download de registros de ocorrências                          |
| ✉️ Notificações     | (Em breve) Envio de alertas por e-mail                                   |
| 📱 Responsivo       | Layout adaptado para celular, tablet e desktop                           |
| 🌓 Modo Claro/Escuro| (Em breve) Alternância de tema pela interface                            |

---

## 📁 Estrutura do Projeto

detector-fogo/
├── public/
│   └── index.html
├── backend/
│   ├── index.js            # Servidor Express (API)
│   └── db/                 # Banco simulado ou Mongo futuramente
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/         # Botões, Inputs, etc.
│   │   └── layout/         # Header, Sidebar, etc.
│   ├── pages/
│   │   ├── LoginPage/
│   │   ├── RegisterPage/
│   │   ├── DashboardPage/
│   │   └── DetectorPage/
│   ├── services/           # API helpers
│   ├── styles/             # Global.css etc.
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md               # Este arquivo

---

# 🧪 Como Rodar o Projeto Localmente

# Clonar o repositório
git clone https://github.com/seuusuario/detector-fogo.git

# Acessar o diretório
cd detector-fogo

# Instalar dependências
npm install

# Rodar o projeto
npm run dev

# Entrar na pasta backend
cd backend

# Instalar dependências
npm install

# Rodar a API
node index.js


