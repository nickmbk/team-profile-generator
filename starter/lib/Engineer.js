const Employee = require('./Employee');

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(id, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.gihub
    }

    getRole() {
        return 'Engineer';
    }
}