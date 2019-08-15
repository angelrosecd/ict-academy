const Express=require('express')
var app=new Express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{        //setting route
    res.render('index',{"names":["angel","anagha","antha","sharmi"]}) //declaring an array
})
app.get('/home',(req,res)=>{        
    res.render('home',{title:"ICTAK Home Page"})
})
app.get('/contact',(req,res)=>{        
    res.render('contact',{title:"CONTACT"})
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  //port number-3000