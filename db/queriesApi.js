const express = require("express");
const connectdb = require("./dbConnection");
const Avis = require("./schema/avisSchema");


const show = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    connectdb.then(db => {           
        Chats.find({ channel: req.query.channel, command: false }, function(err, result) {          
            if (err)
                res.send(err);   
            res.json(result);       
        });
    });
}
const setAvis = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const { avis, ip, objet } = req.body
    connectdb.then(db => {
        console.log("Request avis " + objet + " created: " + avis + "| Create by: " + ip);
        let avisObject = new Avis({ objet: objet, avis: avis, ip: ip });
        avisObject.save();
        res.status(200).send('Objet: ' + objet + '\nAvis: ' + avis + '\nsend by: ' + ip);
    });
}
module.exports = { show, setAvis };