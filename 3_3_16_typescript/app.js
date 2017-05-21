console.log("\t" + "******************* data passing with constructor **********" + "\n");
var employ = (function () {
    function employ(id, name) {
        this.id = id;
        this.name = name;
    }
    employ.prototype.print = function () {
        console.log("The employe name is : " + this.id);
        console.log("The employe name is : " + this.name);
    };
    return employ;
})();
var emp = new employ("E121001c", "ahmed");
emp.print();
console.log("\t" + "******************* typescript + html **********" + "\n");
function click1() {
    alert("Hello World");
}
function save() {
    var name = document.getElementById('name').value;
    document.write(name);
}
console.log("\t" + "******************* typescript + html **********" + "\n");
var two = 2;
var ten = 10;
var result = two + ten;
document.writeln("two plus ten = " + result);
