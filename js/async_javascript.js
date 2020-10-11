// start something now and finish later..
// javacript async method handle task one at time 
// single Threeded and blocking code


const getTodos = (callback)=>{

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{

        if(request.readyState==4 && request.status===200)
        {
            //callback trigered when the condition passed (err equals to undefined and Data equals to Response of Json data)
            callback(undefined , request.responseText)
            
        }
        else if(request.readyState==4){
            callback('could not fetch data', undefined);
        }
   

})
request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
}

getTodos((err,data)=>{
 console.log('callback fired');
 if(err){
    console.log(err);
 }
 else{
    console.log(data);
 }
})



 
