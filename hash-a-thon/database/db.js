const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://fazbglfb:Sdz426n5itGU6MLixlH1Df6WRsaWBvi3@stampy.db.elephantsql.com/fazbglfb', {
    dialect: "postgres",
    logging: true
});

// Test the database connection
(async () => {
    try {
      await sequelize.authenticate();
      sequelize.sync({alter: true});
      console.log('Database connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;

