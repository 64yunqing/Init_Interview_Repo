const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
const { sequelize, syncDatabase } = require('./data/db.js');
const db = require('./data/db.js');
const app = express();

db.syncDatabase()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));
// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由
app.use('/auth', authRoutes);

// 404错误处理
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// 全局错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// 确保在测试之前同步数据库
const initializeApp = async () => {
    try {
        await syncDatabase();
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Failed to sync database:', error);
        process.exit(1);
    }
};

// 在导出之前初始化数据库
if (process.env.NODE_ENV !== 'test') {
    initializeApp();
}

module.exports = app;