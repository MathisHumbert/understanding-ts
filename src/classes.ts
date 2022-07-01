abstract class Department {
  static fiscalYear = 2020;
  // name: string;
  // private readonly id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(this: Department): void {
    console.log('IT Department - ID');
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe(this: Department): void {
    console.log('Accounting - ID');
  }

  addEmployee(name: string) {
    if (name === 'Mathis') return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Math');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Mathis']);
console.log(it);

it.addEmployee('Math');
it.addEmployee('Lisa');

// it.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

// const itCopy = { name: 'maths', describe: it.describe };
// itCopy.describe();

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Mathis');
accounting.addEmployee('Lisa');
accounting.printEmployeeInformation();
