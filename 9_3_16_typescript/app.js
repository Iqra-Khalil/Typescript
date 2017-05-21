var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log("\n");
console.log("\t" + "************ Access Modifiers *****************" + "\n");
console.log("\t" + "************ private Modifiers *****************" + "\n");
var ClassWithModifiers = (function () {
    function ClassWithModifiers(id, name) {
        this._id = id;
        this._name = name;
        console.log("\t" + this._id, this._name);
    }
    ClassWithModifiers.prototype.modifyId = function (id) {
        this._id = id;
        this.updateNameFromId();
    };
    ClassWithModifiers.prototype.updateNameFromId = function () {
        this._name = this._id.toString() + "_name";
        console.log("\t" + "the modified Name form id is : " + this._id + "\n");
    };
    return ClassWithModifiers;
})();
var myClass = new ClassWithModifiers(1, "john");
myClass.modifyId(2);
//myClass. _id = 2;
//myClass. updateNameFromId( ) ;
console.log("\n");
console.log("\t" + "************ protected Modifier *****************" + "\n");
var finalyear_mpl = (function () {
    function finalyear_mpl(id, name) {
        this.name = name;
        this.id = id;
    }
    return finalyear_mpl;
})();
var MPL = (function (_super) {
    __extends(MPL, _super);
    function MPL(id, name) {
        _super.call(this, id, name);
    }
    return MPL;
})(finalyear_mpl);
var mpl = new MPL(2464343, "xyz");
console.log("\t");
console.log(mpl);
console.log("\n");
console.log("\t" + "************ Constructor access modifiers *****************" + "\n");
var replica_const_func = (function () {
    function replica_const_func(id, name) {
        this.id = id;
        this.name = name;
    }
    replica_const_func.prototype.print = function () {
        console.log("id: " + this.id + " name: " + this.name);
    };
    return replica_const_func;
})();
var myAutoClass = new replica_const_func(1, "name");
myAutoClass.id = 2;
myAutoClass.print();
//myAutoClass. name = "test";
console.log("\n" + "\n");
var Person = (function () {
    function Person(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    Person.prototype.getDateOfBirth = function () {
        return this._dateOfBirth.toDateString();
    };
    return Person;
})();
var Infant = (function (_super) {
    __extends(Infant, _super);
    function Infant() {
        _super.apply(this, arguments);
    }
    Infant.prototype.getPersonCategory = function () {
        return "Infant";
    };
    Infant.prototype.cancastVote = function () { return false; };
    return Infant;
})(Person);
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.getPersonCategory = function () {
        return "Child";
    };
    Child.prototype.cancastVote = function () { return false; };
    return Child;
})(Person);
var Adult = (function (_super) {
    __extends(Adult, _super);
    function Adult() {
        _super.apply(this, arguments);
    }
    Adult.prototype.getPersonCategory = function () {
        return "Adult";
    };
    Adult.prototype.cancastVote = function () { return true; };
    return Adult;
})(Person);
var PersonFactory = (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, dateNow.getMonth(), dateNow.getDay());
        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDay());
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
})();
window.onload = function () {
    var personFactory = new PersonFactory();
    var personArray = new Array();
    personArray.push(personFactory.getPerson(new Date(2014, 09, 29))); // infant
    personArray.push(personFactory.getPerson(new Date(2000, 09, 29))); // child
    personArray.push(personFactory.getPerson(new Date(1950, 09, 29))); // adult
    for (var i = 0; i < personArray.length; i++) {
        console.log(" A person with a birth date of : "
            + personArray[i].getDateOfBirth()
            + " is categorised as : "
            + personArray[i].getPersonCategory()
            + " and can cast vote : "
            + personArray[i].cancastVote());
    }
};
