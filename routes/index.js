var express = require('express');

module.exports = function(app) {

    app.get('*', function(req, res, next) {
        var pathname = req.params[0],
            isHtml = pathname.substr(pathname.length - 4) === 'html';
        if (isHtml) {
            pathname = pathname.replace('.html', '').substr(1);
            res.render(pathname);
        } else {
            next();
        }
    });


    app.get('/', function(req, res) {
        res.render('index.html');
    });

};
