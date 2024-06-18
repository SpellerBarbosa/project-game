import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __diname = dirname(__filename)

const app = express();
const port = process.env.PORT || 3001;
const dbPath = join(__diname, '..', '.', 'db', 'users.json');

app.use(cors());
app.use(express.json());

app.post('/cadastrar',(req, res)=>{
    const { user, password } = req.body;

    if(!existsSync(dbPath)){
        fs.writeFileSync(dbPath, JSON.stringify([]));
    }

    const data = fs.readFileSync(dbPath);
    let users = [];

    if(data.length > 0) {
        users = JSON.parse(data);
        users = Array.isArray(users) ? users : [];
    }

    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1: 1,
        user,
        password,
    }

    users.push(newUser);

    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));

    res.json({message: 'usuario cadastrado com sucesso!'})
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

