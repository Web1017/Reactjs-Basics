
var path = require("path");

//compile the directory to dist folder
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {

 entry: SRC_DIR + "/app/index.js",
 output: {
     path: DIST_DIR + "/app",
     filename: "bundle.js",
     publicPath: "/app/"
 },
 module: {
     loaders: [

         {
             //tells webpack which files to test and look at
             test: /\.js?/,
             include: SRC_DIR,
             loaders: "babel-loader",
             query: {
                 presets: ["react","es2015", "stage-2"]
             }
         }
     ]

 }

};

module.exports = config;