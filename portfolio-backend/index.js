import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8000;
const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Для усиливания безопасности на место "*" вставьте ваш домен. 
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Устанавливаем контроль за типом содержимого.
  next();
});
app.use(express.json());
app.post('/auth', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    console.log('db', db)
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

app.listen(port, () => {
  console.log(`server running at localhost:${port}!`)
})