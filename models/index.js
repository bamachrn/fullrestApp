module.exports =function(sequelize) {
    return{
        ServiceStations:require ('./ServiceStations')(sequelize),
        Customer: require('./Customers')(sequelize),
        ServiceBookings:require('./ServiceBookings')(sequelize),
        CustomerBikes: require('./CustomerBikes')(sequelize)
    }
};
