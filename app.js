import express from 'express';
import mongoose from'mongoose';
import results from 'lodash';
import Morgan from 'morgan';
var app=express();
var dbURI='localhost:127017:5000';
mongoose.connect(dbURI)
.then(result)=>{console.log('db connected')}
.catch(err)=>{console.log(err)};
app.set('view-engine','ejs');
app.get('/',(req,res)=>{
   res.render('index');
});
app.get('signup')