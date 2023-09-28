// There are 3 types of factory patterns - Simple Factory, Factory Method and Abstract Factory. Factory method is very similar to Simple Factory but the only difference is, the factory leaves the logic to instantiate objects on its sub classes. That means we can create different factories which implement factory interface but can define their own logic to instantiate objects.

// Factory Method

interface IFlat {
    smallFlat: () => void;
    mediumFlat: () => void;
    bigFlat: () => void;
}

class EconomyFlats implements IFlat {
    smallFlat() {
        console.log('1BHK economy flat')
    }
    mediumFlat() {
        console.log('2BHK economy flat')
    }    
    bigFlat() {
        console.log('3BHK economy flat')
    }
}

class PremiumFlats implements IFlat {
    smallFlat() {
        console.log('1BHK premium flat')
    }
    mediumFlat() {
        console.log('2BHK premium flat')
    }    
    bigFlat() {
        console.log('3BHK premium flat')
    }
}

class LuxuryFlats implements IFlat {
    smallFlat() {
        console.log('1BHK luxury flat')
    }
    mediumFlat() {
        console.log('2BHK luxury flat')
    }    
    bigFlat() {
        console.log('3BHK luxury flat')
    }
}

interface IFlatFactory {
    getFlats: () => void;
}

class CityFlatsFactory implements IFlatFactory {
    private price: number;
    constructor(priceLimit: number) {
        this.price = priceLimit;
    }
    getFlats() {
        if(this.price < 75000) {
            return new EconomyFlats()
        }
        else if(this.price < 1000000) {
            return new PremiumFlats()
        }
        else {
            return new LuxuryFlats()
        }
    }
}

class MotroCityFlatsFactory implements IFlatFactory {
    private price: number;
    private maintainence: number;
    constructor(priceLimit: number, maxMaintainence: number) {
        this.price = priceLimit;
        this.maintainence = maxMaintainence;
    }
    getFlats() {
        if(this.price < 1000000 && this.maintainence < 3000) {
            return new EconomyFlats()
        }
        else if(this.price < 2000000 && this.maintainence < 5000) {
            return new PremiumFlats()
        }
        else {
            return new LuxuryFlats()
        }
    }
}

// Here we have defined an interface for Flat and we have 3 concrete classes using that common interface. Now, we have created interface for factory where we have created 2 concrete factories - each factory having its own logic to instantitate objects.

// So, IFlatFactory -> concreteFactory -> concreteProduct

// Anyone using Factory say a Client, they need not know anything about which class exists or which classes are to be instantiated. They only have to do with getting a Flat as in above example based on thier provided parameters.