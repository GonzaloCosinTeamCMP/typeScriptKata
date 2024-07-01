import { ValidateAge } from './decorators'
import { Manager, Developer, Intern, IDataProcessor } from './models'

export class ManagerProcessor implements IDataProcessor<Manager> {
    @ValidateAge
    async process(data: Manager): Promise<void> {
        console.log('Processing manager:', data)
    }
}

export class DeveloperProcessor implements IDataProcessor<Developer> {
    @ValidateAge
    async process(data: Developer): Promise<void> {
        console.log('Processing developer:', data)
    }
}

export class InternProcessor implements IDataProcessor<Intern> {
    @ValidateAge
    async process(data: Intern): Promise<void> {
        console.log('Processing intern:', data)
    }
}
