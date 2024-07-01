import { ManagerProcessor, DeveloperProcessor, InternProcessor } from './processors';
import { Manager, Developer, Intern } from './models';

const managerProcessor = new ManagerProcessor();
const developerProcessor = new DeveloperProcessor();
const internProcessor = new InternProcessor();

const manager: Manager = { id: '1', name: '', age: 30, department: 'Sales' };
const developer: Developer = { id: '2', name: '', age: 25, programmingLanguages: ['JavaScript', 'TypeScript'] };
const intern: Intern = { id: '3', name: '', age: 19, school: 'University' };

managerProcessor.process(manager)
    .then(() => console.log('Manager processed successfully'))
    .catch(error => console.error('Error processing manager:', error));

developerProcessor.process(developer)
    .then(() => console.log('Developer processed successfully'))
    .catch(error => console.error('Error processing developer:', error));

internProcessor.process(intern)
    .then(() => console.log('Intern processed successfully'))
    .catch(error => console.error('Error processing intern:', error));
