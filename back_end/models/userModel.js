// back_end/models/userModel.js
// 数据结构，数据库交互逻辑
// 封装增删改查
const { DataTypes } = require('sequelize');
const { sequelize } = require('../data/db.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;
