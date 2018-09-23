module.exports = function(sequelize, Sequelize) {

    var orderitem = sequelize.define('orderitem', {

        m_uid: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
        },
        line: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          notEmpty: true,
          unique: true,
        },
        pid: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lineAmount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        linePrice: {
            type: Sequelize.STRING,
            allowNull: false
        }

    },
    {
      timestamps: true,
      tableName: 'orderitem'
    });

    return orderitem;

}
