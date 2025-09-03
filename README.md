# API REST com MongoDB

Projeto para praticar desenvolvimento de API REST utilizando banco de dados não-relacional MongoDB.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/engcaiomoizes/rest-api.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo **nodemon.json** na raíz:

   Exemplo:
   ```json
   {
       "env": {
           "URI": "URI DO SEU BANCO MONGODB",
           "PORT": 3000
       }
   }
   ```

3. Execute o projeto
   ```bash
   npm start
   ```
