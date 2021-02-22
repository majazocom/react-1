// JSX = JavaScript XML
//JSX gör så att vi kan skriva HTML i React

const hello = <section>
    <h1>Hello World</h1>
    <p>Jag heter Maja</p>
    <form>
        <input placeholder="text" />
    </form>
</section>;

ReactDOM.render(hello, document.getElementById('app'));