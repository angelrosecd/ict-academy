function myfunction(stmt,l){
if (stmt.length>l){
    console.log("too long..!")
    console.log(stmt.substring(0,l))

}
else{
    console.log(stmt)
}
}
let stmt='helloworld'
let l=5
myfunction(stmt,l)