var Singleton = function () {
        var instance;
        function create() {
            var randomNumber = Math.random();
            return {
                randomNumber
            }
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = create();
                }
                return instance;
            }
        }
    };

var single1 = Singleton();
var single2 = Singleton();

var s1 = single1.getInstance();
var s2 = single1.getInstance();

console.log(s1, s2);

console.log(s1 == s2 ); 

