import fs from "fs";
import path from "path";
import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

// API ключ для подписи токенов
const secretKey = 'USER_TOKEN';

// Роут для регистрации пользователей
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Проверка данных
  if (!username || !password) {
    return res.status(400).send({ message: 'Недостающие данные' });
  }

  try {
    // Создаем и сохраняем пользователя
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500); // Симуляция длительной операции
    });

    // Генерация токена
    const token = jwt.sign({ username }, secretKey, { expiresIn: '7d' });

    // Отправляем ответ клиенту
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Роут для аутентификации пользователей
app.post('/auth', async (req, res) => {
  const { username, password } = req.body;

    // Проверка данных
  if (!username || !password) {
    return res.status(400).send({ message: 'Недостающие данные' });
  }

  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    // Авторизация пользователя
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500); // Симуляция длительной операции
    });
    
    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );
    if (!userFromBd) {
      return res.status(403).json({ message: 'User not found' });
    }
    // Генерация токена
    const token = jwt.sign(userFromBd, secretKey, { expiresIn: '7d' });

    return res.status(200).json(token);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Мидлвара для проверки токена
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(403).json({ message: 'Токен не создан' });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Токен не валидный, требуется авторизация' });
    }
    req.user = user;
    next();
  });
}
// Роут для авторизации по токену
app.get('/authByToken', verifyToken, async (req, res) => {
    return res.status(200).json(req.user);
});

app.listen(port, () => {
  console.log(`server running at localhost:${port}!`)
})