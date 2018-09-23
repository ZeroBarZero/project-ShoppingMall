module.exports = function(sequelize, Sequelize) {

    var jornal = sequelize.define('jornal', {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            unique: true,
        },
        subtitle: {
          type: Sequelize.STRING,
          allowNull: false
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tag: {
          type: Sequelize.STRING,
          allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        }

    },
    {
      timestamps: true,
      tableName: 'jornal'
    });

    return jornal;

}
