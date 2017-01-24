import { Meteor } from 'meteor/meteor';
var fs = require("fs");

import Series from '/imports/api/collections/Series.js';

const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []


const CreateNewIssue = {

}

const CreateNewSeries = function(dir){
    fs.readdir(dir, (err, files) => {
        files.forEach( file => {

        })
    })
}

const ReadComicDirectory = function(){
    console.log("Scanning directory for files")
    fs.readdir(AllComics, (err,files) => {
        files.forEach( file => {
            const newfile = AllComics+file
            fs.stat(newfile, (err, stats) => {
                if(stats.isDirectory()){
                       
                }
            })    
        })
    })
    console.log("Found "+comicSeries.length+" Adding them now")
}

export {ReadComicDirectory}