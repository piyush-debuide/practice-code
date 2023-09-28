// Factory basically means create or build. Factory pattern is a creational design pattern and deals with object creation problems. In this, we bascially have a common interface for object creation. So, based on a condition or some parameter we pass to this factory we get back required instance. So, we don't have to make changes in main code if something changes but rather just change in this factory itself and that's it.

interface IAnalytics {
    type: (type: string) => void;
    color: (color: string) => void;
}

class Table implements IAnalytics {
    type(type: string) {
        console.log(`building table of type ${type}`)
    }

    color(color: string) {
        console.log(`building table of ${color} color`)
    }
}

class Chart implements IAnalytics {
    type(type: string) {
        console.log(`building chart of type ${type}`)
    }

    color(color: string) {
        console.log(`building chart of ${color} color`)
    }
}

class Graph implements IAnalytics {
    type(type: string) {
        console.log(`building graph of type ${type}`)
    }

    color(color: string) {
        console.log(`building graph of ${color} color`)
    }
}

class AnalyticsFactory {

    static element(type: string) {
        if(type === 'table') {
            return new Table()
        }
        else if(type === 'chart') {
            return new Chart()
        }
        else if(type === 'graph') {
            return new Graph()
        }
        else throw Error()
    }
}

// get a table from Analytics Factory
const table1 = AnalyticsFactory.element('table')
table1.type('basic')

// get chart from Analytics Factory
const chart1 = AnalyticsFactory.element('chart')
chart1.type('pie')