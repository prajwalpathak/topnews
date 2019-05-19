import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSumit}>
                <input placeholder="Search news here..." name="search" onChange={props.handleInputChange} />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBox;