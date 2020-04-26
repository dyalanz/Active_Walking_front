let { pool } = require("../../conf/mysqlConf.js")
let { queryHplace } = require('./Hisb_sql.js')
let {queryNearbyhis} = require('./Hisb_sql.js')

module.exports = {
    
    query: function(params, callback) { // query history place
        let {id} = params
        let sqlparam = [id]
        pool.query(queryHplace, sqlparam, function (error, result) {
            if (error) throw error;
            callback(result[0]);
        });
    },

    query1: function(params,callback) {
        let {lat} = params;
        let sqlparama = [lat];
        let {lng} = params;
        let sqlparamb = [lng];
        let {dist} = params;
        let sqlparamc = [dist];
        pool.query(queryNearbyhis, sqlparama, sqlparamb, sqlparamc, function (error, result) {
            if (error) throw error;
            callback(result);
        });
 }
}
