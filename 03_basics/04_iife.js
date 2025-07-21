// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sanmesh'); //unamed iife

( () => { 
    console.log('DB CONNECTED TWO');

}
)();
 
( function sam ()  { 
    console.log('DB CONNECTED THREE');

}
)()