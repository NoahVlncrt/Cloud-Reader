import { Meteor } from 'meteor/meteor';
var fs = require("fs");

import Series from '/imports/api/collections/Series.js';

const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []


const CreateNewIssue = function(filepath){
    seriesId = Series.findOne({path: filepath})._id
    fs.readdir(filepath, (err,files) => {
        files.forEach( file => {
            console.log(file)
        })
    })
}

const ReadComicDirectory = function(){
    console.log("Scanning directory for files")
    fs.readdir(AllComics, Meteor.bindEnvironment((function(err,files){
        files.forEach( file => {
            const ogfile = file
            const newfile = AllComics+file
            fs.stat(newfile, Meteor.bindEnvironment(function(err, stats){
                if(stats.isDirectory()){
                    Series.insert({name: ogfile, path: newfile})
                    CreateNewIssue(newfile)
                }
            }))
        })
    })))
}

export {ReadComicDirectory}