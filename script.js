class Goodbye extends React.Component {
    render() {
        return (
            <h1>Good bye!</h1>
        )
    }
};

class Hej extends React.Component {
    render() {
        return (
            <h1>Hej</h1>
        )
    }
};

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Maja',
            age: '32'
        }
    }
    render() {
        return (
            <section>
                {/* kommentar */}
                <h1 className="hejhej">Hello World</h1>
                <p>Jag heter {this.state.name} och jag är {this.state.age} år gammal</p>
                <form>
                    <input placeholder="text" />
                </form>
                <Goodbye />
                <Hej />
            </section>
        )
    }
};
ReactDOM.render(<Hello />, document.getElementById('app'));