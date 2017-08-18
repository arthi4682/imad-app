var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//reducing the code 

var articles={ 

 'article-one': {
    title:'Article-one | my imad tutorial',
    heading:'Introduction part 1',
    date:'Aug 18,2017',
    content:`<p> <b>Webapp<b> is a client-server application that runs in a web browser. <b>Browser</b> is a software that needs to be installed on the device to use the webapp.
		<b>URL</b> is used to identify the server and the client.</p>
		<p>
		<b> Protocol</b> identifies the rules of the communication.<b>Hostname</b> identified the server.<b>Path</b> defines the resource being requested.
		<b>Query String</b> repressents the additional parameters
		</p> `
},  
  'article-two':{   title:'Article-one | my imad tutorial',
    heading:'Introduction part 2',
    date:'Aug 19,2017',
    content:`<p> <b>Webapp<b> is a client-server application that runs in a web browser. <b>Browser</b> is a software that needs to be installed on the device to use the webapp.
		<b>URL</b> is used to identify the server and the client.</p>
		<p>
		<b> Protocol</b> identifies the rules of the communication.<b>Hostname</b> identified the server.<b>Path</b> defines the resource being requested.
		<b>Query String</b> repressents the additional parameters
		</p>` }   
};




function createTemplate(data){
    
var title=data.title;
var date= data.date;
var heading= data.heading;
var content=data.content;

var htmlTemplate=`
 <html>
	<head>
		<title>	
		${title}
		</title>
		<meta name="viewport" content= "width-device-width" />
		<link href="ui/style.css" rel="stylesheet" />

	</head>

	<body>
	<div>
	<a href="/">Home</a>
	</div>
    <div class ="container">
	<h3> ${heading}</h3>
	<h4>${date}</h4>
	
	${content}
		
	</div>
	</body>

</html> `
;

return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
   //res.send(createTemplate(articleOne)); 
   var articleName= req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
/*
app.get('/article-two',function(req, res){
   res.send(createTemplate(articleTwo)); 
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
