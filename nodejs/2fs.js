const myos=require('os')
var myfs=require('fs')
var userdata =myos.userInfo()
var platform=myos.platform()
myfs.appendFile("mydata.txt",userdata.username,(error)=>{
    if (error){
    throw error
    console.log(error)
    }
})