const pool = require("../../db");
const queries = require("./queries");

const getDrugs = (req, res)=>{
    pool.query(queries.getDrugs ,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })

};

module.exports = {
    getDrugs,
};
