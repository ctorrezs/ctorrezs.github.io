function printCars()
{
    var make_line = "<td>" + this.make + "</td>";
    var model_line = "<td>" + this.model + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var color_line = "<td>" + this.color + "</td>";
    var mileage_line = "<td>" + this.mileage + "</td>";

    var row = "<tr>" + make_line + model_line + year_line + color_line + mileage_line + "</tr>";
    document.write(row);
}

//degine an object of employee - constructor
function Cars(make, model, year, color, mileage)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;

    //assign a method to this object
    this.printCars = printCars;
}

//create an employee object
var toyota = new Cars("Toyota", "Corolla", "2021", "White", "18,000");
var ford = new Cars("Ford", "Mustang", "2020", "Red", "12,000");
var honda = new Cars("Honda", "Civic", "2019", "Blue", "30,000");
var tesla = new Cars("Tesla", "Model 3", "2022", "Black", "5,000");
var chevrolet = new Cars("Chevrolet", "Camaro", "2021", "Yellow", "15,000");

//display employee information
toyota.printCars();
ford.printCars();
honda.printCars();
tesla.printCars();
chevrolet.printCars();

//create an array of employee names
var empArray = [toyota.make, ford.make, honda.make, tesla.make, chevrolet.make];
//sort the array
empArray = empArray.sort();
for( var counter = 0; counter < empArray.length; counter++ )
{
    document.write(empArray[counter] + "<br>");
}