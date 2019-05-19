// Break down the app in class based components

// Use stateless components where state is not required

/*
const Test = (props) => {
    // Don't require render method if it just returns JSX
    return (
        <div>
        <h1>{props.title}</h1>
        </div>
    );
}
*/

// If { error: error }, replace it with just { error }

// Set defaults as well

//Clear the search input

// Make parts of code concise where we only return one value with arrow function

/*
To return an object in function
const test = () => ({ key: value })    OR this.setState(() => ({ key: value }));
*/

// Use local storage to show previous searches or may be buttons for possible searches

// Define errors 

// Clear the input fields

// Check how to use life cycle methods

// Set default seacrh query to the previous query using local storage

// Can change the class based component syntax to be simpler and use arrow function to avoid binding of event handlers

/* 
Old Syntax
class oldSyntax {
    constructor() {
        this.name = name;
    }
}

New Syntax
class newSyntax {
    name = name;
}
*/

// Shorten the statless components that return JSX only by removing return as well.

// Add date to the page

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

class TopNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fetching: true,
            query: '',
            error: false,
        };
    }

    componentDidMount = () => {
        this.getData('movies')
    }


    //API fetch call
    getData(query) {
        console.log(query)
        fetch(`https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=KyQrSDMcGaX87x2FDPHkAdUAKNMNJn07`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.status === 'OK') {
                    this.setState(() => {
                        return {
                            error: false,
                            fetching: false,
                            data: res.results
                        }
                    });
                }
                else {
                    this.setState(() => {
                        return {
                            error: true,
                            fetching: false
                        }
                    });
                }
            })
            .catch(err => console.log(err))
    }

    handleInputChange = (e) => {
        const query = e.target.value.trim();
        this.setState(() => {
            return {
                query,
                fetching: true,
                error: false
            }
        });
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.getData(this.state.query);
    }


    render() {
        return (<div>
            <h1>Top Stories</h1>
            <form onSubmit={this.handleSumit}>
                <input placeholder="Search news here..." value={this.state.query} onChange={this.handleInputChange} />
                <button>Search</button>
            </form>
            {this.state.fetching ? 'Getting data...' : <ul>
                {this.state.data.map((el, index) => (
                    <li key={index}>
                        {el.title}: {el.abstract}
                    </li>
                ))}
            </ul>}
            {this.state.error ? 'error' : ''}
        </div>);
    }
}

ReactDOM.render(<TopNews />, document.getElementById('app'));


























/* const callData = (section) => {
    fetch("https://api.nytimes.com/svc/topstories/v2/" + section +  ".json?api-key=KyQrSDMcGaX87x2FDPHkAdUAKNMNJn07")
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
};

callData("automobiles");

class TopNews extends React.Component {

    state = {
        sectionTitle: "",
        news: []
    };

    componentDidMount() {
        Promise.all(
            [
                this.getData("science"),
                this.getData("books")
            ]
        )
            .then(data => console.log(data));
    }

    checkChange = (e) => {
        this.setState({
            sectionTitle: e.target.value
        })
    }

    getData = (sectionTitle) => {
        return fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionTitle}.json?api-key=KyQrSDMcGaX87x2FDPHkAdUAKNMNJn07`)
            .then(data => data.json())
    }

    fetchNews = (sectionTitle) => {
        this.getData(sectionTitle)
            .then(data => this.setState({ news: data.results }))
            .catch(err => console.log(err));
    }

    render() {

        const newsList = this.state.news.map((item, index) => (
            <li key={index}>
                {item.abstract}
            </li>
        ));

        return (
            <div>
                {<h1 className="section-heading">{this.props.sectionName}</h1>}
                <input onChange={this.checkChange} type="text" value={this.state.sectionTitle}>
                </input>
                <button onClick={this.fetchNews.bind(null, this.state.sectionTitle)}>Search</button>
                <hr/>
                {newsList}
            </div>
        );
    };
}
*/


