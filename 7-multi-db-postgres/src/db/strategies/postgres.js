const ICrud = require('./interfaces/interfaceCrud');
const Sequelize = require('sequelize');


class Postgres extends ICrud {
  constructor() {
    super()
    this.driver = null,
    this._herois = null
    this._connect()
  }

  create(item) {
    console.log('O item foi salvo no Postgres')
  }

  async isConnected(){
    try {
      await this._driver.authenticate()      
      return true
    } catch (error) {
      console.log('fail', error)
      
    }
  }

  async defineModel() {
    this._herois = sequelize.define('Heroi', {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      }
    }, {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
    await this._herois.sync()
  }

  _connect(){
    this._driver = new Sequelize(
      'heroes',
      'davi', 
      'password',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorAliases: false
      }
    )
  }
}

module.exports = Postgres;