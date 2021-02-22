// JSX = JavaScript XML
// JSX gör så att vi kan skriva HTML i React

const apa = () => {
    return 10 + 10;
}

const hello = <section className="container">
    <h1>Hello World</h1>
    <p>Some math: </p>
    <p>10 + 10 = {apa()}</p>
</section>;

ReactDOM.render(hello, document.getElementById('app'));