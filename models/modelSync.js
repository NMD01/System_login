const sequelize = require('../database/connection');

function modelSync() {
  sequelize.sync();
}

module.exports = modelSync;
