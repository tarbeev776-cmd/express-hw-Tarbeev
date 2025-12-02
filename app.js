const express = require('express');
const basicRoutes = require('./routes/basic');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', basicRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
