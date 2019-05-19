import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox'
import News from './News';
import GetDate from './GetDate';
import Page from './Page';

export default class TopNews extends React.Component {

    state = {
        data: [],
        query: 'world',
        fetching: true,
        error: false,
        currentPage: 1,
        perPage: 5
    }

    onClickPage = (e) => {
        e.preventDefault();
        const idValue = e.target.id;
        this.setState(() => {
            return {
                currentPage: Number(idValue)
            }
        });
    }

    componentDidMount() {
        this.getData();
    }

    /* Adding History
    componentDidUpdate(prevProps, prevState) {
        if(prevState.history.length !== this.state.history){
            const json = JSON.stringify(this.state.history);
            localStorage.setItem('history', json);
        }
    }
    */

    getData = (query = 'world') => {
        fetch(`https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=KyQrSDMcGaX87x2FDPHkAdUAKNMNJn07`)
            .then(res => res.json())
            .then(res => {
                if (res.status === 'OK') {
                    console.log(res);
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
                error: false,
            }
        });
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.getData(this.state.query);
        // this.setState((prevState) => {
        //     return {
        //         history: prevState.history.concat(this.state.query)
        //     }
        // });
        if (this.state.query) {
            e.target.elements.search.value = '';
        }
    }

    render() {
        const subtitle = this.state.query;

        return (
            <div>
                <GetDate />
                <Header
                    subtitle={subtitle}
                />
                {/* {
                    this.state.history.map((el) => {
                        <p>{el}</p>
                    })
                } */}
                <SearchBox
                    handleInputChange={this.handleInputChange}
                    name="seacrh"
                    handleSumit={this.handleSumit}
                />
                <News
                    news={this.state.data}
                    dataFetch={this.state.fetching}
                    currentPage={this.state.currentPage}
                    perPage={this.state.perPage}
                />
                <Page
                    onClick={this.onClickPage}
                    news={this.state.data}
                    perPage={this.state.perPage}
                />
            </div>
        );
    }
}