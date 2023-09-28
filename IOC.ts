// Here laptop class is not concreate, we inject all parts laptop depends on such as ram, harddisk, display, body. This is called dependency injection. Say, earlier we hardcoded all these parts in laptop itself. Then user can create laptop without any customization, he would only get laptop with same parts. But now that we're usinng dependencies instead of tightly coupling them to laptop class, we have moved the control away from laptop class to user that wants to create laptop. So, user has control over which parts he wants this class to use to build the laptop. This is called Inversion of Control.

class Laptop {
    private RAM: string;
    private Harddisk: string;
    private Display: string;
    private Body: string;
    constructor(RAM: string, Harddisk:string, Display: string, Body: string) {
        this.RAM = RAM;
        this.Harddisk = Harddisk;
        this.Display = Display;
        this.Body = Body;
    }

    assembleLaptop() {
        console.log(`Assemble laptop using ${this.RAM}ram ${this.Harddisk}hardisk ${this.Display}display ${this.Body}body`)
    }
}

// user can create laptop passing in desired parts
const laptop1 = new Laptop('wdelements', 'lenovo', 'samsung', 'apple')

// We can also use factory pattern here in case we want to build concrete laptops of different companies. So, user can get desired company's laptop by simply passing in company's name to LaptopFactory. If a company changes its specifications in future, we simply make changes to laptop factory and no where else or we can also inject laptop configurations of different companies as dependency here but it's all based on need.

class LaptopFactory {
    private laptop: Laptop;
    constructor(company: string) {
        if(company === 'apple') {
            this.laptop = new Laptop('apple', 'sandisk', 'sony', 'apple')
        }
        else if(company === 'lenovo') {
            this.laptop = new Laptop('kingston', 'lenovo', 'samsung', 'lenovo')
        }
        else if(company === 'acer') {
            this.laptop = new Laptop('corsair', 'segate', 'acer', 'lenovo')
        }
        else {
            console.log('Company not available, sending default laptop')
            this.laptop = new Laptop('wdelements', 'lenovo', 'samsung', 'apple')
        }
    }

    getLaptop() {
        this.laptop.assembleLaptop();
    }
}


// If we have single method we can invoke directly where required else we can create an object and invoke individual methods from factory
new LaptopFactory('apple').getLaptop();