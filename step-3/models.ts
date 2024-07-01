// src/models.ts
import { DefaultName } from './decorators';

export class Employee {
    readonly id: string;

    @DefaultName
    name: string;

    age: number;

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

export class Manager extends Employee {
    readonly department: string;

    constructor(id: string, name: string, age: number, department: string) {
        super(id, name, age);
        this.department = department;
    }
}

export class Developer extends Employee {
    readonly programmingLanguages: ReadonlyArray<string>;

    constructor(id: string, name: string, age: number, programmingLanguages: string[]) {
        super(id, name, age);
        this.programmingLanguages = programmingLanguages;
    }
}

export class Intern extends Employee {
    readonly school: string;

    constructor(id: string, name: string, age: number, school: string) {
        super(id, name, age);
        this.school = school;
    }
}

export interface IDataProcessor<T> {
    process(data: T): Promise<void>;
}
