const express = require('express');
const cors = require('cors');


const app = express()
app.use(cors());


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

app.get('/fol', (req, res) =>{
    const fruit = {
        product: 'apple',
        price: 200
    }
    res.send(fruit);
});
app.get('/fruits/banana', (req, res) =>{
    res.send({fruit: 'Banana', quantity: 1000, price: 1000});
});
//User templete
const users = ['arif', 'sayed', 'asad', 'milon', 'hasan']
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
});
//POST
app.post('/addUser', (req, res)=>{
    //console.log('Data Recived', req.body);
    const user = res.body;
    user.id = 55;
    res.send(user);
})

app.listen(4200, () => console.log('Open port 4200'));

