var employee = (function () {
    function employee(id, name) {
        this.id = id;
        this.name = name;
    }
    employee.prototype.print = function () {
        console.log("The employe name is : " + this.id);
        console.log("The employe name is : " + this.name);
    };
    return employee;
})();
var emp = new employee("E121001c", "ahmed");
emp.print();
/*class employee {
      id:string;
      name:string;
      
      
      constructor (id:string , name:string)
      {
          this.id = id;
          this.name = name;
      }
      
     print()
     {
         console.log("The employe name is : "+ this.id);
         console.log("The employe name is : "+ this.name);
     }
}

class department extends employee {
     
     department : string;
     designation: string;
     
     
/*	 constructor (dept:string , des:string )
     {
         this.department = dept;
         this.designation = des;
          }
     
*/
/*  print1()
 {
    // console.log("The employe name is : "+ super(id));
     console.log("The employe name is : "+ this.department);
     console.log("The employe name is : "+ this.designation);
 }
}


var emp:employee  = new employee("E121001c", "ahmed");
var depart:department = new department("sds232" , "cs" ),


emp.print();

depart.print1();

*/
function click1() {
    alert("Hello World");
}
function save() {
    var name = document.getElementById('name').value;
    document.write(name);
}
/* var two:number= 2;
var ten:number = 10;



var result:number = two + ten;
document.writeln("two plus ten = " +result + "\n");
var linebreak:string = "<br />"
var temp:number = 12+result;
document.write("12+12 is:" +temp);

//console.info(result);
//document.write(linebreak);
/*
document.write("ten * ten = ")
result = ten * ten
document.write(result)
document.write(linebreak)

document.write("ten / two = ")
result = ten / two
document.write(result)


*/
