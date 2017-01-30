import { Meteor } from 'meteor/meteor';
var fs = require("fs");
var unzip = require("unzip");

import Series from '/imports/api/collections/Series.js';
import Issue from '/imports/api/collections/Issue.js';

const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []

const basePath = process.env.PWD

const extensionSearch = /\.cbr|\.cbz/

//scans the directory passed to it, cleans up all filenames, checks extensions, and adds them to issue
const PopulateSeries = function(filepath){
    const seriesId = Series.findOne({path: filepath})._id
    fs.readdir(filepath, Meteor.bindEnvironment(function(err,files){
        files.forEach(function(file) {
            var currentDirectory = filepath+"/"+file
            if(file.match(extensionSearch)){
                const filename = file.split(extensionSearch)
                console.log(filename[0])
            }
            
        })
    }))
}

//scans entire directory specified by the user in the settings and returns all the folders
const ReadComicDirectory = function(){
    console.log("Scanning directory for files")
    fs.readdir(AllComics, Meteor.bindEnvironment((function(err,files){
        files.forEach( file => {
            console.log(file)
            const ogfile = file
            const newfile = AllComics+file
            fs.stat(newfile, Meteor.bindEnvironment(function(err, stats){
                if(stats.isDirectory()){
                    Series.insert({name: ogfile, path: newfile})
                    PopulateSeries(newfile)
                }
            }))
        })
    })))
}

export {ReadComicDirectory}