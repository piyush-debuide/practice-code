// Command design pattern is a type of Behaviorial Pattern which encapsulates requests or commands - not the invoking object that wants to send request or the receiver that should perform some action on request but the commands itself. This allows us to parameterize objects with different requests or commands. Here we have created a Remote class and Display Class - they are like invoker and receiver. We also have different classes which implements a coomon interface called ICommand. Now, say remote has 4 buttons. We can now instansiate a remote with different commands so that each button executes command that we want it to execute. So, we can have remote1 configured with some commonds for each of 4 buttons while also have remote2 configured with different or altered commands for each of 4 buttons. So, the request and response here are loosely coupled and can be changed anytime.

interface ICommand {
    execute: () => void;
}

interface IDisplay {
    openMenu: () => void;
    closeMenu: () => void;
    navigate: () => void;
    click: () => void;
}

class Remote {
    private onPressGreen: ICommand;
    private onPressRed: ICommand;
    private onPressBlue: ICommand;
    private onPressYellow: ICommand;

    constructor(onPressGreen: ICommand, onPressRed: ICommand, onPressBlue: ICommand, onPressYellow: ICommand) {
        this.onPressGreen = onPressGreen;
        this.onPressRed = onPressRed;
        this.onPressBlue = onPressBlue;
        this.onPressYellow = onPressYellow
    }

    Green() {
        this.onPressGreen.execute();
    }

    Red() {
        this.onPressRed.execute();
    }

    Blue() {
        this.onPressBlue.execute();
    }

    Yellow() {
        this.onPressYellow.execute();
    }
}


class Display implements IDisplay {
    openMenu() {
        console.log('Menu opened')
    }

    closeMenu() {
        console.log('Menu closed')
    }

    navigate() {
        console.log('Navigated')
    }

    click() {
        console.log('Clicked')
    }
}

class OpenMenu implements ICommand {
    private receiver: IDisplay;
    constructor(target: IDisplay) {
        this.receiver = target;
    }
    execute() {
        this.receiver.openMenu()
    }
}

class CloseMenu implements ICommand {
    private receiver: IDisplay;
    constructor(target: IDisplay) {
        this.receiver = target;
    }
    execute() {
        this.receiver.closeMenu()
    }
}

class Navigate implements ICommand {
    private receiver: IDisplay;
    constructor(target: IDisplay) {
        this.receiver = target;
    }
    execute() {
        this.receiver.navigate()
    }
}

class Click implements ICommand {
    private receiver: IDisplay;
    constructor(target: IDisplay) {
        this.receiver = target;
    }
    execute() {
        this.receiver.click()
    }
}

const display1 = new Display();
const remote1 = new Remote(new OpenMenu(display1), new CloseMenu(display1), new Navigate(display1), new Click(display1));
remote1.Green();
remote1.Red();
remote1.Blue();
remote1.Yellow();