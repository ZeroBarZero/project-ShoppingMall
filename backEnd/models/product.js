module.exports = function(sequelize, Sequelize) {

    var product = sequelize.define('product', {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            defaultValue: 0
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tag: {
            type: Sequelize.STRING,
            allowNull: false
        }

    },
    {
      timestamps: true,
      paranoid: false,
      tableName: 'product'
    });

    return product;

}
