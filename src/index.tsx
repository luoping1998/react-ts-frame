import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';
import imgsrc from './static/hi.jpg';

class App extends React.Component {
    public render() {
        return (
            <div>
                <h1>Welcome to React-TS-Frame.</h1>
                <img src={imgsrc}/>
                <p>hello, bro.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));