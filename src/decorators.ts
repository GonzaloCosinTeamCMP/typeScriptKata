// Method decorator
import {Manager} from './models'

export function ValidateAge(data: Manager) {
    return function (
        target: object, // Parent class
        key: string | symbol, // Name of the function
        descriptor: PropertyDescriptor // Method it self
    ) {

        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            const data = args[0]
            if (data.age <= 18) {
                throw new Error('Employee age must be greater than 18')
            }

            return originalMethod.apply(this, args)
        }

        return descriptor
    }
}

export function DefaultName() {
    return function (target: Object, propertyKey: any) {
        let value: string = target[propertyKey]

        const getter = () => {
            return value
        }

        const setter = (newVal: string) => {
            if (!newVal) {
                value = 'Pol'
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}
