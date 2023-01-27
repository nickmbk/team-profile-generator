const Employee = require('./Employee');

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(id, school) {
        super(name, id, email);
        this.school = school;
    }

    // getSchool() {

    // }

    // getRole() {
    //     // overidden to return 'Intern'
    // }
}







// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'