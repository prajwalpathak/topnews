import React from 'react';

class Page extends React.Component {


    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.news.length / this.props.perPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <ul>
                    {pageNumbers.map((number) => {
                        return (
                            <button
                                key={number}
                                id={number}
                                onClick={this.props.onClick}
                            >
                                {number}
                            </button>
                        );
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Page;