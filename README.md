Node.js starter template for beginning a node webproject faster.
=======
The template makes use of the following technologies:

express - web application framework for nod http://expressjs.com

jade - template engine, easier and more convenient than writing html http://jade-lang.com

stylus - for dynamic and faster writing of CSS http://learnboost.github.io/stylus/

grunt - for automation tasks revolving around npm and node (back-end side of things) http://gruntjs.com

bower - not really part of the template per se, as I copied my content from an old project, but I will try updating this part. It automates management of front-end packages like jQuery or Bootstrap http://bower.io

Bootstrap - front-end framework for easier and faster web development. Incorporates a lot of already designed web site elements, like buttons or sliders. Responsiveness is an elemental feature http://getbootstrap.com

restler - Library to consume other web APIs. https://github.com/danwrong/restler
=======
This is what you need to do to get started:
Navigate to your project/dev directory within Terminal (in case you use OS X)
cd ~/Path/to/your/projectfolder

Clone the template here, it's cloned in a directory called NodejsTemplate
git clone https://github.com/michaelklopf/NodejsTemplate.git

Now you need to have installed node. In case you don't have it, maybe make yourself comfortable with brew http://brew.sh

Once installed, you can install node with
brew install node

npm, the node packet manager is part of the installation.

Afterwards we turn our attention back to the template folder, navigate to the folder NodejsTemplate.
cd ~/Path/to/your/projectfolder/NodejsTemplate

Listing (ls -a) the content should show you these files:
.		.git		Gruntfile.js	index.html	package.json	web.js
..		.gitignore	README		index.jade	static

Before we can start the application, we need to install the dependencies listed in the package.json file.
For this we need only to execute the following command in a folder where a package.json file is located.
npm install

Afterwards we are good to go, execute the following command
node web.js

The message "Listening on port 3000" should appear in the console.

Go to your browser and call the address:
```
localhost:3000
```

The template site should appear.

Now let's dig a little deeper into how this all works.

With calling web.js you start the web application. In this file we create a web server which listens on port 3000 and waits for incoming requests.

When you look at the file, you see the following parts:
```javascript
var express = require('express');
var http = require('http');
var sys = require('util');
var rest = require('restler');
var fs = require('fs');
var jade = require('jade');
var stylus = require('stylus');
```

Here all the related modules are loaded to make the functions they provide accessible.

```javascript
var app = express();
app.use(stylus.middleware(__dirname + '/static'));
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());
```

We create and configure a new application. First, the stylus middleware is called to transform every styl file into a equivalent css file.

With express.static we provide resources like css, javascript, images to the web application.

bodyPaser allows to read the content of the incoming requests.

```javascript
app.get('/', function(req, res) {
    var data = jade.renderFile(__dirname + '/index.jade');
    res.contentType('text/html');
    res.send(200, data);
});
```

This is the standard route which is called when entering localhost:3000 in the browser. We call the index.jade file which is transformed to html and then send back to the caller.

```javascript
app.post('/testpost', function(req, res) {
    console.log(req.body);
    res.send(200, JSON.stringify("Received data successfully."));
});
```

An example post route. Normally this one is called with certain parameters which are accessable in req.body.

```javascript
var port = 3000;
http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
```

The final lines define the port and create the web server.

index.jade makes use of an example Bootstrap template with navigation and a footer. The styl file adds some code to show the footer properly.

From here you can edit the template as you like. Using your own Bootstrap template, adding buttons, posting content to the server, processing it in web.js, etc.
