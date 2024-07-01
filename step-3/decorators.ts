// https://youtu.be/O6A-u_FoEX8?t=6
export function ValidateAge(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        const data = args[0]
        if (data.age <= 18) {
            throw new Error('Employee age must be greater than 18')
        }

        return originalMethod.apply(this, args)
    }
}

export function DefaultName(target: any, propertyKey: string) {
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
