// Observer pattern bascially has observable (in this example  - a weather station) and observers (in this example - source1 and source2, basically it could be any source, could be website, application, machine which needs latest information from this weather station). Here one to many relationship exists (that is one observable - many observers). So, in this design patterrn obervable maintains a list of subscriptions (that is which sources are subscribed to it) and whenever some change has occured in this obervable entity or when we want to notify of this change to subscribed observers, we simply invoke its method to notify all of its susbcribers. Here, source1 and source2 doesn't have to keep asking or pulling latest update from this weatherstation. Rather, weatherstation itself will notify them whenever change occurs or when we want it to notify. Why ? because these sources are subscribed to weatherstation. 

interface IObservable {
    add: (observer: IObserver) => void;
    remove: (observer: IObserver) => void;
    notify: () => void;
}

interface IObserver {
    update: () => void;
}

class WeatherStation implements IObservable {
    private subscriptions: any;
    constructor() {
        this.subscriptions = []
    }

    // we are passing in observer so we can call its method when notify that observer

    add(observer: IObserver) {
        this.subscriptions.push(observer);
    }

    remove(observer: IObserver) {
        this.subscriptions.filter((i: any) => i=== observer);
    }

    notify() {
        this.subscriptions.forEach((o: any) => {
            o.update();
        })
    }

    // extra methods specific to weather station

    temperature() {
        return Math.random()
    }

    humidity() {
        return Math.random()
    }

}

// here we are coupling source1 with an instance of weather station in case we want to access some methods from it once update is made. 

class Source1 implements IObserver {
    private station: any;
    constructor(station: any) {
        this.station = station;
    }
    update() {
        console.log('Source1 - updated')
        console.log('data', this.station.temperature(), ',', this.station.humidity())
    }
}

class Source2 implements IObserver {
    // source2 doesn't have access to weather station instance or methods but it has to have some function to perform after update is done, skipping since not relevant to this demo.

    update() {
        console.log('Source2 - updated')
    }
}

const station1 = new WeatherStation();
// source1 expects a station to be passed to it, so it can access its methods
const source1 = new Source1(station1)
// we didn't explicitly create any constructor for source2, so no need to pass anything
const source2 = new Source2();


//Subscribing sources to station1
station1.add(source1)
station1.add(source2)

// Say we invoke notify method of station1 at different points in app
station1.notify()
station1.notify()
station1.notify()