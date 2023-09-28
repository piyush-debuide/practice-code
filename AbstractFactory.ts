interface IFurniturefactory {
    chair: () => IChair;
    sofa: () => ISofa;
}

// Abstract Product1 Interface
interface IChair {
    getChair: () => void;
}

// Abstract Product2 Interface
interface ISofa {
    getSofa: () => void; 
}

// Concrete Product1 Variant
class WoodenChair implements IChair {
    getChair() {
        console.log('wooden chair')
    }
}

// Concrete Product1 Variant
class MetalChair implements IChair {
    getChair() {
        console.log('metal chair')
    }
}

// Concrete Product2 Variant
class WoodenSofa implements ISofa {
    getSofa() {
        console.log('wooden sofa')
    }
}

// Concrete Product2 Variant
class MetalSofa implements ISofa {
    getSofa() {
        console.log('metal sofa')
    }
}

// Factory1 creating concrete Product1 and Product2 of similar type
class AnticFurnitureFactory implements IFurniturefactory {
    chair(): IChair {
        return new WoodenChair()
    }

    sofa(): ISofa {
        return new WoodenSofa()
    }

}

// Factory2 creating concrete Product1 and Product2 of similar type
class ModernFurnitureFactory implements IFurniturefactory {
    chair(): IChair {
        return new MetalChair()
    }

    sofa(): ISofa {
        return new MetalSofa()
    }
}

// main code
class App {
    private furniture: IFurniturefactory;
    constructor(year: number) {
        if(year < 2000) {
            this.furniture = new AnticFurnitureFactory();
        }
        else {
            this.furniture = new ModernFurnitureFactory()
        }
    }

    produceFurniture() {
        // produce family of related objects without specifying thier concrete class
        this.furniture.chair().getChair()
        this.furniture.sofa().getSofa()
    }
}

const AppInstance1 = new App(1972)

AppInstance1.produceFurniture()