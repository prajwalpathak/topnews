import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSumit} className="search-box">
                <input placeholder="Search news here..." name="search" onChange={props.handleInputChange} className="search-txt"/>
                <button className="search-btn"><i class="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default SearchBox;