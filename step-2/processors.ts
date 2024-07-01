import { IDataProcessor, Manager, Developer, Intern } from './models'

export class ManagerProcessor implements IDataProcessor<Manager> {
    async process(data: Manager): Promise<void> {
        console.log('Processing manager:', data)
    }
}

export class DeveloperProcessor implements IDataProcessor<Developer> {
    async process(data: Developer): Promise<void> {
        console.log('Processing developer:', data)
    }
}

export class InternProcessor implements IDataProcessor<Intern> {
    async process(data: Intern): Promise<void> {
        console.log('Processing intern:', data)
    }
}
