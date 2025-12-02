const express = require('express');
const basicRoutes = require('./routes/basic');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON тел запросов
app.use(express.json());

// Подключаем маршруты
app.use('/', basicRoutes);

// Обработка 404 - маршрут не найден
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
