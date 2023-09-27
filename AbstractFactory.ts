// Here we have created 2 concrete factories - DestopAnalyticsFactory and PhoneAnalytcisFactory. These both implements same abtract factory class and gives us 2 products - Product1 and Product2. But Product1 and Product2 are related and compatible within the scope of its family. That is DestopAnalyticsFactory is a family with realted or compatible Product1 and Product2 separate from PhoneAnalytcisFactory family with related and compatible Product1 and Product2. So, to simply explain - if we want to get products specifically for desktop devices we use DestopAnalyticsFactory and if we want to get products specifcially for phone devices we use PhoneAnalytcisFactory. 

interface AbstractAnalyticsFactory {
    Product1: () => void;
    Product2: () => void;
}

interface AbstractProductA {
    Function1: () => void;
    Function2: () => void;
}

interface AbstractProductB {
    Function1: () => void;
    Function2: () => void;
    Function3: () => void;
}

class DesktopAnalytics implements AbstractAnalyticsFactory {
    Product1() {
        return new ProductA1();
    };
    Product2() {
        return new ProductB1();
    };
}

class PhoneAnalytics implements AbstractAnalyticsFactory {
    Product1() {
        return new ProductA2();
    };
    Product2() {
        return new ProductB2();
    };
}

class ProductA1 implements AbstractProductA {
    Function1() {
        console.log('Function1 for Product A1')
    }
    Function2() {
        console.log('Function2 for Product A1')
    }
}

class ProductA2 implements AbstractProductA {
    Function1() {
        console.log('Function1 for Product A2')
    }
    Function2() {
        console.log('Function2 for Product A2')
    }
}

class ProductB1 implements AbstractProductB {
    Function1() {
        console.log('Function1 for Product A1')
    }
    Function2() {
        console.log('Function2 for Product A1')
    }
    Function3() {
        console.log('Function3 for Product B2')
    }
}

class ProductB2 implements AbstractProductB {
    Function1() {
        console.log('Function1 for Product B2')
    }
    Function2() {
        console.log('Function2 for Product B2')
    }
    Function3() {
        console.log('Function3 for Product B2')
    }
}

let Factory1: any = {};
// This is Factory1 - a variant of Abstract Analytics Factory
const desktopAnalyticsFactory = new DesktopAnalytics()
// These both products derieved from Factory 1 are related in some way
Factory1.product1 = desktopAnalyticsFactory.Product1()
Factory1.product2 = desktopAnalyticsFactory.Product2()
Factory1.product1.Function1()
Factory1.product1.Function2()
Factory1.product2.Function1()
Factory1.product2.Function2()
Factory1.product2.Function3()

let Factory2: any = {};
// This is Factory2 - another variant of Abstract Analytics Factory
const phoneAnalyticsFactory = new PhoneAnalytics()
// These both products derieved from Factory 2 are related in some way
Factory2.product1 = phoneAnalyticsFactory.Product1()
Factory2.product2 = phoneAnalyticsFactory.Product2()
Factory2.product1.Function1()
Factory2.product1.Function2()
Factory2.product2.Function1()
Factory2.product2.Function2()
Factory2.product2.Function3()