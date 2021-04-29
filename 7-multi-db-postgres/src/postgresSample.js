// install sequelize pg-hstore pg
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
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

async function main() {
  const Heroi = sequelize.define('Heroi', {
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

  await Heroi.sync()
  await Heroi.create({
    nome: 'Yoda',
    poder: 'A Força',
  })
  

  const result = await Heroi.findAll({
    raw: true,
    // attributes: ['nome']
  })
  console.log(result)
}

main()