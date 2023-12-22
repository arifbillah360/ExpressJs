const express = require('express');
const app = express()

function HomeApp(req, res){
    res.send('This is my First HomePage code on Express.JS');
}
function about(req, res){
    res.send("Ubuntu, RedHat, Debian, CentOS. Offering services like server administration, VPS management, and expert website migration. With a track record of 200+ websites and 100+ server configurations, I prioritize quality work and client satisfaction. Available for remote work.");
}
function contact(req, res){
    res.send('my number is:01779440297<br> My Email is: emran.alarif8@gmail.com');
}
app.get('/', HomeApp );
app.get('/about', about );
app.get('/contact', contact );
app.listen(80, () => console.log('Open port 3000'));

