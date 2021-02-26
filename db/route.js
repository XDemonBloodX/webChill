'use strict';
module.exports = function(app) {
    const db = require('./queriesApi')

    app.route('/show')
        .get(db.show)

    app.route('/avis')
        .post(db.setAvis)
}