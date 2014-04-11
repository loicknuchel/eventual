# eventual

This part of application is apart from the play application and benefits of all front-end shiny tools.

## Prerequisites
1. Install [node and npm](http://www.nodejs.org)
2. Install **Grunt** running `npm install -g grunt-cli` 
3. Install **Bower** running `npm install -g bower`

## Getting started
1. Go to folder ui `cd ui`
2. Run `npm install` to install grunt dependencies
3. Run `bower install` to install bower dependencies
4. Run `grunt play` to compile and copy files in play directories

## Developement
* Run `grunt dev` to copy files in play and start watchers for livereload (with play)
* Grunt will automatically copy modified files in play folders to keep them always in sync

## Package for Production
* Run `grunt package` to package your static assets for production (not working yet...)
* Your package will be generated in a play folder and your javascripts and stylesheets will be concatenated, minified and versionned.

## Cleaning
* Run `grunt clean` to remove all generated files.
