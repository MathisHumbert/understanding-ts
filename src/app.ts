class Department {
  // name: string;
  // private id: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
console.log(accounting);

accounting.addEmployee('Math');
accounting.addEmployee('Lisa');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'maths', describe: accounting.describe };
// accountingCopy.describe();
