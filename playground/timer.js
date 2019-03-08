

// function longRunning(){
//     setTimeout(function(){
//         console.log("Running...");
//     }, 3000);
// }

// function webRequest(req){

//     console.log("Starting the op : #"+  req.id);
//     longRunning();
//     console.log("Ending the op : #"+  req.id);
// }

// webRequest({id : 1})
// webRequest({id : 2})
// webRequest({id : 3})
// webRequest({id : 4})
// webRequest({id : 5})
// webRequest({id : 6})


// console.log("Program Starts");
// let start = Date.now();

// function delay(cb, time){

//     while((Date.now() - start) < time){
//     }
    
//     cb();
        
// }
// delay(function(){
//     console.log("2 Seconds left");
// }, 2000);

// console.log("Program terminates");