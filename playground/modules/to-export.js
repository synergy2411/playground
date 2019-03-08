// Module Revealing Pattern

function myModule (){
    var rnd = Math.floor(Math.random()*10)
    var privateVar  = "I am Private";

    function privateFunc(){
        console.log(privateVar);
    }

    function publicFunc(){
        privateFunc();
    }

    return {
        randomNumber : rnd,
        publicFunc
    }
}


module.exports = {myModule};

// module.exports.myModule = myModule;










module.exports.MAGIC_NUMBER = Math.floor(Math.random()*100);

module.exports.foo = function(){
    console.log("Foo Called!");
}