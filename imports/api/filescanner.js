import { Meteor } from 'meteor/meteor';
var fs = require("fs");

import Series from '/imports/api/collections/Series.js';
import Issue from '/imports/api/collections/Issue.js';
var AdmZip = require('adm-zip');


const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []

const basePath = process.env.PWD

const extensionSearch = /\.cbr|\.cbz/

const getSeriesCover = function(zip){
    var zip = new AdmZip(zip)
    entries = zip.getEntries()
    const coverRegex = /(000)/

    console.log(entries[1].entryName)
}

//scans the directory passed to it, cleans up all filenames, checks extensions, and adds them to issue
const PopulateSeries = function(filepath){
    const seriesId = Series.findOne({path: filepath})._id
    fs.readdir(filepath, Meteor.bindEnvironment(function(err,files){
        getSeriesCover(filepath+"/"+file)
        files.forEach(function(file) {
            var currentDirectory = filepath+"/"+file //complete path to zip file 'directory/place/item.zip' etc...
            if(file.match(extensionSearch)){
                const filename = file.split(extensionSearch)
                if(!Issue.findOne({filepath: currentDirectory})){
                    Issue.insert({name: filename[0], filepath: currentDirectory, parentSeries: seriesId})
                }
            }
            
        })
    }))
}

//scans entire directory specified by the user in the settings and returns all the folders
const ReadComicDirectory = function(){
    console.log("Scanning directory for files")
    if(!AllComics){
      return "There doesn't seem to be anything here :("
    }
    fs.readdir(AllComics, Meteor.bindEnvironment((function(err,files){
        files.forEach( file => {
            const ogfile = file
            const newfile = AllComics+file
            fs.stat(newfile, Meteor.bindEnvironment(function(err, stats){
                if(stats.isDirectory()){
                   // if(!Series.findOne({path: newfile})){
                        Series.insert({name: ogfile, path: newfile})
                        PopulateSeries(newfile)
                    //}
                }
            }))
        })
    })))
}

export {ReadComicDirectory}