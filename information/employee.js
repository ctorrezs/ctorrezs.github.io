function printEmployee()
{
    var name_line = "<td>" + this.name + "</td>";
    var title_line = "<td>" + this.title + "</td>";
    var phone_line = "<td>" + this.phone + "</td>";

    var row = "<tr>" + name_line + title_line + phone_line + "</tr>";
    document.write(row);
}

//degine an object of employee - constructor
function Employee(name, title, phone)
{
    this.name = name;
    this.title = title;
    this.phone = phone;

    //assign a method to this object
    this.printEmployee = printEmployee;
}

//create an employee object
var edward = new Employee("Edward", "Student", "(956) 872-3445");
var lisa = new Employee("Lisa Simpson", "Teacher", "(956) 111-1111");
var mike = new Employee("Mike Tyson", "Boxer", "(956) 787-2222");

//display employee information
edward.printEmployee();
lisa.printEmployee();
mike.printEmployee();

//create an array of employee names
var empArray = [edward.name, lisa.name, mike.name];
//sort the array
empArray = empArray.sort();
for( var counter = 0; counter < empArray.length; counter++ )
{
    document.write(empArray[counter] + "<br>");
}