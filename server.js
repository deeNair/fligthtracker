require('dotenv').config();
const express =require('express');
const app = express();
const connectTodb=require('./config/db');
const Flight = require('./models/Flight');

app.set('view engine','jsx');

app.engine('jsx',require('jsx-view-engine').createEngine())

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('flights ready')
 })


app.get('/flights',(req,res)=>{
//res.render('./Index')
Flight.find({},(error,allFlights)=>{
    res.render('./Index',{flights:allFlights})
})

})
/*app.get('/flights',(req,res)=>{
    Flight.insertMany(req.body).then((flight)=>{
        res.redirect('./Index');
    }).catch((error)=>{
        console.log(error);
    })
})
*/
/*app.post('/flights',(req,res)=>{
    Flight.create(req.body,(error,createdFlight)=>{
        res.redirect('/flights')
    })
})*/
app.post('/flights',(req,res)=>{
    //console.log(req.body);
    Flight.create(req.body).then(flight=>{
        res.send(flight)
    }).catch((error)=>{
        console.error(error);
    })
})



app.get('/flights/new',(req,res)=>{
    res.render('./New')
       
   })


app.listen(3000,()=>{
    console.log('server up');
    connectTodb(); 

    /*function newDate(){
        const date =setFullYear(new date().getFullYear()+1);
        return date;
    }*/
   // console.log(new Flight);

 })

 //new Date(new Date().setFullYear(new Date().getFullYear+1));