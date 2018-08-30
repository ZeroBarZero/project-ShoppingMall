module.exports = function(sequelize, Sequelize) {

    var user = sequelize.define('project', {

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
        contents: {
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
      tableName: 'project'
    });

    return user;

}
