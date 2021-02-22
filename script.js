

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
            </section>
        )
    }
}
ReactDOM.render(<Hello />, document.getElementById('app'));