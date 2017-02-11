import { Meteor } from 'meteor/meteor';
var fs = require("fs");
var unzip = require("unzip");


import Series from '/imports/api/collections/Series.js';
import Issue from '/imports/api/collections/Issue.js';


const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []

const basePath = process.env.PWD

const extensionSearch = /\.cbr|\.cbz/

const getSeriesCover = function(zip,ogfile){
    let counter = 0 
    fs.createReadStream(zip)
        .pipe(unzip.Parse())    
        .on('entry', function(entry) {
            filename = entry.path;
            if(entry.type === 'File'){
                if(counter < 1){
                    entry.pipe(fs.createWriteStream(basePath+"/public/covers/"+ogfile+"/"+"cover.jpg"))
                    counter =+ 1
                } else {
                    entry.autodrain()
                }
            } else {
                entry.autodrain();
            }
        })
}

//scans the directory passed to it, cleans up all filenames, checks extensions, and adds them to issue
const PopulateSeries = function(filepath,ogfile){
    const seriesId = Series.findOne({path: filepath})._id
    fs.readdir(filepath, Meteor.bindEnvironment(function(err,files){
        fs.mkdir(basePath+"/public/covers/"+ogfile)
        getSeriesCover(filepath+"/"+files[0],ogfile)

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
                   if(!Series.findOne({path: newfile})){
                        console.log("adding "+ogfile+" to server")
                        Series.insert({name: ogfile, path: newfile, cover: "/covers/"+ogfile+"/cover.jpg"})
                        PopulateSeries(newfile,ogfile)
                    }
                }
            }))
        })
    })))
}

export {ReadComicDirectory}