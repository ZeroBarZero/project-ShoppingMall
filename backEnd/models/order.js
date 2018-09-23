module.exports = function(sequelize, Sequelize) {

    var order = sequelize.define('order', {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            autoIncrement: true
        },
        pg: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        pay_method: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        mechant_uid: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        buyer_email: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        buyer_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        buyer_tel: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        buyer_addr: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        buyer_postcode: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        }

    },
    {
      timestamps: true,
      tableName: 'order'
    });

    return order;

}
