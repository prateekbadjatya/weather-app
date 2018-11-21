var getuser = (id,callback) => {
    var user = {
        id: id,
        name: 'Prateek'
    };
    setTimeout(() => {
    callback(user);
    },3000);
    
    };
    
    getuser(31, (userObject) =>{
    console.log(userObject)  //{ id: 31, name: 'Prateek' }
    });
    //With async.waterfall, 
    //the first argument is an array of functions, and the second argument is your done callback. 
    
    
    /*In your array of functions, the first function will
     always start with a single argument, the callback. Each subsequent function should match 
    the non-err arguments of the previous function sans the err function
     and with the addition of the new callback.*/