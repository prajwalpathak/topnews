import React from 'react';
import Loader from 'react-loader-spinner'


export default class App extends React.Component {

    render() {
        return (
            <div className="loader">
                <Loader
                    type="Triangle"
                    color="#2f3640"
                    height="30"
                    width="30"
                />
            </div>
        );
    } Ï
}