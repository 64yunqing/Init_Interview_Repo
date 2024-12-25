const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
});

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to sync database:', error);
        throw error;
    }
};

module.exports = {
    sequelize,
    syncDatabase
};