import { Meteor } from 'meteor/meteor';
var fs = require("fs");

const AllComics = Meteor.settings.private.pathtocomics;

const comicSeries = []

const ReadComicDirectory = function(){
    fs.readdir(AllComics, (err,files) => {
        console.log(files)
        files.forEach( file => {
            console.log(AllComics+file)
            fs.stat(AllComics+file, (err, stats) => {
                if(stats.isDirectory()){
                    console.log("you've done it")
                } else {
                    console.log("Damn you failed man")
                }
            })    
        })
    })
}

export {ReadComicDirectory}