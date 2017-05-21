console.log("\n");
console.log ("\t"+"************ Access Modifiers *****************"+ "\n");  

console.log ("\t"+"************ private Modifiers *****************"+ "\n"); 
class ClassWithModifiers {
private _id: number;
private _name: string;
constructor( id: number, name: string) {
this. _id = id;
this. _name = name;
console.log("\t"+this._id , this._name);
}
modifyId( id: number) {
this. _id = id;
this. updateNameFromId( );
}
private updateNameFromId( ) {
this. _name = this. _id. toString( ) + "_name";
console.log("\t"+"the modified Name form id is : " +this._id +"\n");
}
}

var myClass = new ClassWithModifiers( 1, "john");
myClass.modifyId(2);
//myClass. _id = 2;
//myClass. updateNameFromId( ) ;

console.log("\n");

console.log ("\t"+"************ protected Modifier *****************"+ "\n"); 
class repeater{
	
	protected  id:number ;
	protected name:string ; 
	constructor (id:number ,name:string)
	{
		this.name = name;
		this.id = id;
	}
}

class MPL extends repeater{
	
	constructor (id:number , name:string){
	super(id , name);
}}

var mpl:MPL = new MPL(2464343 , "xyz");
console.log("\t");
console.log( mpl);
console.log("\n");

console.log ("\t"+"************ Constructor access modifiers *****************"+ "\n"); 

class replica_const_func {
constructor( public id: number, private name: string) {
	
	
}
print( ) : void {
console. log( "id: " + this. id + " name: " + this. name) ;
}
}
var myAutoClass = new replica_const_func( 1, "name") ;
myAutoClass. id = 2;
myAutoClass.print();
//myAutoClass. name = "test";

console.log("\n"+"\n");





interface IPerson {
	getPersonCategory(): string;
	cancastVote(): boolean;
	getDateOfBirth(): string;
}

class Person {
	_dateOfBirth: Date
	constructor(dateOfBirth: Date) {
		this._dateOfBirth = dateOfBirth;
	}
	getDateOfBirth(): string {
		return this._dateOfBirth.toDateString();
	}
}
class Infant extends Person implements IPerson {
	getPersonCategory(): string {
		return "Infant";
	}
	cancastVote() { return false; }
}
class Child extends Person implements IPerson {
	getPersonCategory(): string {
		return "Child";
	}
	cancastVote() { return false; }
}
class Adult extends Person implements IPerson {
	getPersonCategory(): string {
		return "Adult";
	}
	cancastVote() { return true; }
}

class PersonFactory {
	getPerson(dateOfBirth: Date): IPerson {
		var dateNow = new Date();
		var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2,
			dateNow.getMonth(), dateNow.getDay());
		var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18,
			dateNow.getMonth(), dateNow.getDay());
		if (dateOfBirth >= dateTwoYearsAgo) {
			return new Infant(dateOfBirth);
		}
		if (dateOfBirth >= dateEighteenYearsAgo) {
			return new Child(dateOfBirth);
		}
		return new Adult(dateOfBirth);
	}
}
window.onload = () => {
	
	var personFactory = new PersonFactory();
	var personArray: IPerson[] = new Array();
	personArray.push(personFactory.getPerson(
		new Date(2014, 09, 29))); // infant
	personArray.push(personFactory.getPerson(
		new Date(2000, 09, 29))); // child
	personArray.push(personFactory.getPerson(
		new Date(1950, 09, 29))); // adult
	for (var i = 0; i < personArray.length; i++) {
		console.log(" A person with a birth date of : "
			+ personArray[i].getDateOfBirth()
			+ " is categorised as : "
			+ personArray[i].getPersonCategory()
			+ " and can cast vote : "
			+ personArray[i].cancastVote());
	}
}

