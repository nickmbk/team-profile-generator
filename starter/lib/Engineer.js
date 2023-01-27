const Employee = require('./Employee');

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(id, githubUsername) {
        super(name, id, email);
        this.github = githubUsername;
    }

    // getGithub() {

    // }

    // getRole() {
    //     //overide to return Engineer
    // }
}






// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'