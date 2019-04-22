var pool = require ('./../../dbpool.js');

module.exports.query = pool.query('SELECT * FROM ALBUM', function (err, result, fields) {
    if (err) throw new Error(err)
    console.log(result)
});
