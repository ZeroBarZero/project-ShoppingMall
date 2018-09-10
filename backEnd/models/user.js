module.exports = function(sequelize, Sequelize) {

    var user = sequelize.define('user', {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        isVerificated: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        postcode: {
          type: Sequelize.STRING,
          allowNull: false
        }
    },
    {
      timestamps: true,
      paranoid: true,
      tableName: 'user'
    });

    return user;

}
