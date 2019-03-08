// console.log("Hello Node");


//node myFile.js

myFile.readContent();

function shoudleContinue(){
    let pendingTimers = [];     // setTimeout(), setInterval etc
    let pendingOSTasks = [];    // networks tasks i.e accesing google server, makeing http server running on some port etc
    let pendingAsyncTask = [];  // writing some contents over file, callbacks etc

    return pendingAsyncTask.length || pendingOSTasks.length || pendingTimers.length;
}

while(shoudleContinue()){            // tick

    // checks whether :
        // 1. all pendingAsync task completed
        // 2. pendingTimers completed
        // 3. pendingOSTask completed
    
    // Pause execution, and waits : 
        // - timers
        // - network request
        // - Async task

}

// program terminates