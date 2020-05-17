module.exports = (sequelize, DataTypes) => {
  const GuestMeta = sequelize.define('guestMeta', {
    contact: {
      type: DataTypes.STRING
    },
    card_name: {
      type: DataTypes.STRING
    },
    flag: {
      type: DataTypes.STRING
    },
    purpose: {
      type: DataTypes.STRING
    },
  })

  return GuestMeta;

}