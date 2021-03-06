module.exports = function(sequelize, Sequelize) {

    var project = sequelize.define('project', {

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
        period: {
          type: Sequelize.STRING,
          allowNull: false
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false
        },
        coCo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        },
        url: {
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
      tableName: 'project'
    });

    return project;

}
