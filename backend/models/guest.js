module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define('guest', {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },

  })
  Guest.associate = (models) => {
    Guest.hasOne (models.guestMeta)
  }
  
  return Guest;


}