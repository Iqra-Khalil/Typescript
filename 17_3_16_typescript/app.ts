 class staticfunc {
	
	
	static print()
	{
console.log("******************    how to use static filed  **********************\n");
		
		console.log("hello world\n");
		
	}
}

staticfunc.print();

console.log("*************************    get date  ********************************\n");

var dateNow = new Date();
console.log(dateNow);

var b = dateNow.getDate();
console.log(b);


console.log("*************************  call back function *************************\n");



function callingFunction( initialText, callback) {
console. log( "inside CallingFunction") ;
if ( typeof callback === "function") {
callback( initialText) ;
} else {
console.log( callback + " is not a function") ;
}
}

callingFunction( "myText", "this is not a function") ;

