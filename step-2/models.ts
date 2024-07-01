export interface Employee {
    readonly id: string;
    name: string;
    age: number;
}

export class Manager implements Employee {
    readonly id: string;
    name: string;
    age: number;
    readonly department: string;

    constructor(id: string, name: string, age: number, department: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
    }
}

export class Developer implements Employee {
    readonly id: string;
    name: string;
    age: number;
    readonly programmingLanguages: ReadonlyArray<string>;

    constructor(id: string, name: string, age: number, programmingLanguages: string[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.programmingLanguages = programmingLanguages;
    }
}

export class Intern implements Employee {
    readonly id: string;
    name: string;
    age: number;
    readonly school: string;

    constructor(id: string, name: string, age: number, school: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
    }
}
// Step-2 - https://youtu.be/EcCTIExsqmI?t=49
export interface IDataProcessor<T> {
    process(data: T): Promise<void>;
}
