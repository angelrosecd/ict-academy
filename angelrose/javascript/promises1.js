var promise =new Promise(function(resolve,reject){
    const x="geeksforgeeks"
    const y="geeksforgeeks"
    if(x===y){
        resolve()

    }else{
        reject()
    }
})
promise.
    then(function(){
    console.log('success,you are a geek')
}).
    catch(function(){
    console.log('some error has occured')
})