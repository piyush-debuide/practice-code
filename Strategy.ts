// We could run into a situation where we want our created class instance to have a different functionality for a particular method defined in its interface. Say we derieve multiple objects from a class which has a certain interface and methods. But what if certain objects requires different functionality when executing a particular method. We could introduce if else statements but that wouldn't be ideal especially when having multiple sub classes and multiple definitions for particular method. In such cases it'd become pretty messy pretty quick. That is where strategy design pattern comes in. We basically defined different strategies for a particlular method, for example we can define multiple alorithms implementing same interface. Here, we have different classes or strategies implementing IFly and IEat interface. So, we can choose which strategy to use when creating the class instance. Strategy design pattern is a type of Behavorial design pattern because we can choose or alter object's behaviour at run time.

interface ICharacter {
    walk: () => void;
    fly: () => void;
    eat: () => void;
}

interface IFly {
    fly: () => void;
}

interface IEat {
    eat: () => void;
}

// Defining strategies for fly and eat

class NormalFly implements IFly {
    fly() {
        // some algorithm
        console.log('can fly normally')
    }
}

class LinearFly implements IFly {
    fly() {
        // some algorithm
        console.log('can only fly linearly')
    }
}

class NoFly implements IFly {
    fly() {
        // some algorithm
        console.log('cant fly')
    }
}

class ChewEating implements IEat {
    eat() {
        // some algorithm
        console.log('can chew food')
    }
}

class SlurpEating implements IEat {
    eat() {
        // some algorithm
        console.log('can only slurp food')
    }
}

class Character implements ICharacter {
    private flyStrategy: IFly;
    private eatStrategy: IEat;
    constructor(flyStrategy: IFly, eatStategy: IEat) {
        this.flyStrategy = flyStrategy;
        this.eatStrategy = eatStategy;
    }
    walk() {
        console.log('walking behaviour')
    }

    fly() {
         console.log(`flying behaviour`, this.flyStrategy.fly())
    }

    eat() {
        console.log(`eating behaviour`, this.eatStrategy.eat())
    }
}

// Bird will have its own flying and eating behaviour
const Bird = new Character(new NormalFly(), new SlurpEating())

Bird.walk();
Bird.fly();
Bird.eat();