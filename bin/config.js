var config = {
    "port": 3000,
    "db": "todotest"
}

config['dburl'] = "mongodb://mongo:27017/"+ config['db'];


module.exports = config